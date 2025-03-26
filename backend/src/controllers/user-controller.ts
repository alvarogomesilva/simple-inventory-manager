import { Request, Response } from "express";
import * as userService from '../services/user-service';

export async function registerUser(request: Request, response: Response) {
    const userData = request.body

    try {

        const user = await userService.createNewUser(userData)
        response.status(201).json(user)
    } catch (error: any) {
        
        if (error.code === "P2002") {
            return response.status(409).send("Email já existe.");
        }
        console.log(error)

        response.status(500).send("Erro não tratado.");
    }
}