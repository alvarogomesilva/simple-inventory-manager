import { api } from "./api"

export const getCategories = async () => {
    const { data } = await api.get('/categories')
    return data
}

export const deleteCategory = async(id: string) => {
    await api.delete(`/categories/${id}`)
}