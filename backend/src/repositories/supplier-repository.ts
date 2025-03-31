import { prismaClient } from "../config/prisma-client";
import { CreateSupplierDto } from "../types/suppliers/create-supplier.dto";

export async function create(data: CreateSupplierDto) {
    return await prismaClient.supplier.create({
        data: {
            name: data.name,
            email: data.email
        }
    })
}