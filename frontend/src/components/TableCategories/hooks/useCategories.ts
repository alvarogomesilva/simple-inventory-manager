import { useEffect, useState } from "react";
import { Categories } from "../../../types/categories";
import { getCategories } from "../../../services/categoryService";


export const useCategories = () => {
    const [categories, setCategories] = useState<Categories[]>([]);

    const fetchCategories = async () => {
        const data = await getCategories() 
        setCategories(data)
    }


    useEffect(() => {
        fetchCategories()

    }, [categories])

    return { categories, fetchCategories }
}