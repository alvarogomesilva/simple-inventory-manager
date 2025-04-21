import { CreateCategoryDto } from "../types/categories/create-category.dto";
import * as categoryRepository from '../repositories/category-repository';
import { UpdateCategoryDto } from "../types/categories/upadte-category.dto";

export async function createNewCategory(categoryData: CreateCategoryDto) {
    return await categoryRepository.create(categoryData)
}

export async function getCategories() {
    return await categoryRepository.getCategories()
}

export async function updateCategory(categoryId: string, categoryData: UpdateCategoryDto) {
    return await categoryRepository.updateCategory(categoryId, categoryData)
}

export async function deleteCategory(id: string) {
    return await categoryRepository.deleteCategory(id)
}