import { prismaClient } from "../config/prisma-client";
import { CreateProductDto } from "../types/products/create-product.dto";

export async function create(data: CreateProductDto)  {
    return await prismaClient.product.create({
        data: {
            name: data.name,
            description: data.description,
            price: data.price,
            categoryId: data.categoryId
        }
    })
}