import { Request, Response } from "express";
import * as productService from '../services/product-service';

export async function registerProduct(request: Request, response: Response) {
    const productData = request.body

    try {
        const productCreated = await productService.createNewProduct(productData)

        response.status(201).json(productCreated)
    } catch (error) {
        console.log(error)

        response.status(500).send("Erro não tratado.");
    }
}