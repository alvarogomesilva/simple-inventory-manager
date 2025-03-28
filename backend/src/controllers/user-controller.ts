import { Request, Response } from "express";
import * as userService from '../services/user-service';

export async function registerUser(request: Request, response: Response) {
    const userData = request.body

    try {

        const user = await userService.createNewUser(userData)
        response.status(201).send(user)
    } catch (error: any) {

        if (error.code === "P2002") {
            response.status(409).send("Email já existe.");
            return;
        }
        console.log(error)

        response.status(500).send("Erro não tratado.");
    }
}

export async function login(request: Request, response: Response) {
    const authData = request.body

    try {
        const auth = await userService.autenticate(authData)
        response.status(200).send(auth)
    } catch (error: any) {

        if (error.message == 'email/password incorretos') {
            response.status(400).json({ message: error.message })
            return;
        }
        response.status(500).send("Erro interno.");
        console.log(error)
    }
}

export async function details(request: Request, response: Response) {
    const userId = request.userId as string;

    try {
        const user = await userService.detailUser(userId)
        response.status(200).json(user)
    } catch (error: any) {

        if (error.message === 'usuário inválido') {
            response.status(400).json({ message: error.message })
            return;
        }

        console.log(error)
    }
}