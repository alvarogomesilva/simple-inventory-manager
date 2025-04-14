import { useEffect, useState } from "react";
import { Categories } from "../../../types/categories";
import { deleteCategory, getCategories } from "../../../services/categoryService";


export const useCategories = () => {
    const [categories, setCategories] = useState<Categories[]>([]);

    const fetchCategories = async () => {
        const data = await getCategories() 
        setCategories(data)
    }

    const handleDelete = async (id: string) => {
        await deleteCategory(id)
    }


    useEffect(() => {
        fetchCategories()

    }, [categories])

    return { categories, fetchCategories, handleDelete }
}