import { string } from "zod";
import { prismaClient } from "../config/prisma-client";
import { CreateCategoryDto } from "../types/categories/create-category.dto";
import { UpdateCategoryDto } from "../types/categories/upadte-category.dto";

export async function create(data: CreateCategoryDto) {
    return await prismaClient.category.create({
        data: { name: data.name }
    })
}

export async function getCategories() {
    return await prismaClient.category.findMany()
}

export async function deleteCategory(id: string) {
    return await prismaClient.category.delete({
        where: { id: id }
    })
}

export async function updateCategory(id: string, data: UpdateCategoryDto) {
    return await prismaClient.category.update({
        where: { id: id },
        data: { name: data.name }
    })
}