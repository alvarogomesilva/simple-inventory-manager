import { Request, Response } from "express";
import * as categoryService from '../services/category-service';

export async function registerCategory(request: Request, response: Response) {
    const categoryData = request.body

    try {
        const categoryCreated = await categoryService.createNewCategory(categoryData)  
        response.status(201).json(categoryCreated)  
    } catch (error) {
        console.log(error)

        response.status(500).send("Erro não tratado.");
    }
}

export async function listAllCategories(request: Request, response: Response) {
    try {
        const categories = await categoryService.getCategories()
        response.status(200).json(categories)
    } catch (error) {
        console.log(error)
        response.status(500).send("Erro ao carregar todas as categorias")
    }
}


export async function deleteCategory(request: Request, response: Response) {
    try {
        const id = request.params.id as string
        const deleteCategory = await categoryService.deleteCategory(id)
        response.status(200).json(deleteCategory)
    } catch (error) {
        console.log(error)
        response.status(500).send("Erro ao deletar a categoria")
    }
}