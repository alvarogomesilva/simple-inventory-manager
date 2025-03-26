import { prismaClient } from "../config/prisma-client";
import { CreateUserDto } from "../types/create-user.dto";

export async function create(data: CreateUserDto) {
    return await prismaClient.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: data.password
        },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            updatedAt: true
        }
    })

}

export async function findByEmail(email: string) {
    return await prismaClient.user.findUnique({
        where: {
            email
        }
    });
}