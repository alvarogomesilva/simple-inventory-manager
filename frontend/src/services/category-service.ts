import { api } from "./api"

export const newCategoryService = async (nameCategory: string) => {
    const { data } = await api.post('/categories', { name: nameCategory })
    return data
}

export const getCategories = async () => {
    const { data } = await api.get('/categories')
    return data
}

export const updateCategory = async (id: string, name: string) => {
    const { data } = await api.put(`/categories/${id}`, { name: name })
    return data
}

export const deleteCategory = async (id: string) => {
    await api.delete(`/categories/${id}`)
}