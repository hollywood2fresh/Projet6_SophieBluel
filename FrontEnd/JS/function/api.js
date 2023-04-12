export async function fetchJSON(url) {
    const reponse = await fetch(url)
    if(reponse.ok) {
        return reponse.json()
    }
    throw new Error('Erreur serveur', {cause: reponse})
}