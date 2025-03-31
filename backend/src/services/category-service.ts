import { CreateCategoryDto } from "../types/categories/create-category.dto";
import * as categoryRepository from '../repositories/category-repository';

export async function createNewCategory(categoryData: CreateCategoryDto) {
    return await categoryRepository.create(categoryData)
}