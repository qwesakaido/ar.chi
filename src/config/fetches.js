import { baseUrl } from "./api"

export async function fetchBlocks() {
    const response = await fetch(baseUrl)
    if (!response.ok) {
        throw new Error('Ошибка загрузки данных')
    }

    const data = await response.json()
    if (!Array.isArray(data)) {
        throw new Error('Expected data to be an array')
    }
    return data
}