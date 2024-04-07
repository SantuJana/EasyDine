export async function getHomePageBanner(){
    const response = await fetch('/api/banner')
    return response.json()
}