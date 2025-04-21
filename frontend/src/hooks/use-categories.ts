import { useEffect, useState } from "react";
import { Categories, CategoryEdit } from "../types/categories"
import { deleteCategory, getCategories, updateCategory } from '../services/category-service';


export const useCategories = () => {
    const [categories, setCategories] = useState<Categories[]>([]);

    const fetchCategories = async () => {
        const data = await getCategories()
        setCategories(data)
    }

    const handleDelete = async (id: string) => {
        await deleteCategory(id)
    }

    const handleEdit = async (id: string, name: string) => {
        const data = await updateCategory(id, name)
        setCategories(data)
    }


    useEffect(() => {
        fetchCategories()

    }, [categories])

    return { categories, fetchCategories, handleDelete, handleEdit }
}