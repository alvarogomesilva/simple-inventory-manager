import { Request, Response } from "express";
import * as supplierService from '../services/supplier-service';

export async function registerSupplier(request: Request, response: Response) {
    const supplierData = request.body
    try {
        const supplierCreated = await supplierService.createNewSupplier(supplierData)
        response.status(201).json(supplierCreated)

    } catch (error) {
        console.log(error)

        response.status(500).send("Erro não tratado.");
    }
}