export async function getCategories(){
    const response = await fetch('/api/categories')
    return response.json()
}

export async function getPopularItems(){
    const response = await fetch('/api/popular-items')
    return response.json()
}