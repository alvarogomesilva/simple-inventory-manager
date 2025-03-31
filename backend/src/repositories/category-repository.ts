import { prismaClient } from "../config/prisma-client";
import { CreateCategoryDto } from "../types/categories/create-category.dto";

export async function create(data: CreateCategoryDto) {
    return await prismaClient.category.create({
        data: { name: data.name }
    })
}