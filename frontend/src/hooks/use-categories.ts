import { useEffect, useState } from "react";
import { Categories, CategoryEdit } from "../types/categories"
import { deleteCategory, getCategories, newCategoryService, updateCategory } from '../services/category-service';


export const useCategories = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [categories, setCategories] = useState<Categories[]>([]);

    const handleNewCategory = async (nameCategory: string) => {
        setIsLoading(true)
        await newCategoryService(nameCategory)
        setIsLoading(false)
    }

    const fetchCategories = async () => {
        const data = await getCategories()
        setCategories(data)
    }

    const handleDelete = async (id: string) => {
        await deleteCategory(id)
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