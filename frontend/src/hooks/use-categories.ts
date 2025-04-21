import { useEffect, useState } from "react";
import { Categories, CategoryEdit } from "../types/categories"
import { deleteCategory, getCategories, newCategoryService, updateCategory } from '../services/category-service';
import { toast } from "sonner";


export const useCategories = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [categories, setCategories] = useState<Categories[]>([]);

    const handleNewCategory = async (nameCategory: string) => {
        setIsLoading(true)
        await newCategoryService(nameCategory)
        setIsLoading(false)
        toast.success('Categoria salva')
    }

    const fetchCategories = async () => {
        const data = await getCategories()
        setCategories(data)
    }

    const handleDelete = async (id: string) => {
        await deleteCategory(id)
        toast.success('Categoria deletada')
    }

    const handleEdit = async (id: string, name: string) => {
        setIsLoading(true)
        await updateCategory(id, name)
        setIsLoading(false)
    }


    useEffect(() => {
        fetchCategories()

    }, [categories])

    return { categories, isLoading, fetchCategories, handleNewCategory, handleDelete, handleEdit }
}