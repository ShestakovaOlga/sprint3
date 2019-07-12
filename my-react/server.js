export async function GetUsers() {
    const result = await fetch(`https://randomuser.me/api/?results=50`)
    const data = await result.json()
    return data
}