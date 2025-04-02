import { CreateProductDto } from "../types/products/create-product.dto";
import * as productRepository from '../repositories/product-repository'

export async function createNewProduct(produtctData: CreateProductDto) {
    return await productRepository.create(produtctData)
}