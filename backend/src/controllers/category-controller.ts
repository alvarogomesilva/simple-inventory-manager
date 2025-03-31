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