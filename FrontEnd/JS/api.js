export async function fetchJSON(url, fetchData) {
    const reponse = await fetch(url, fetchData)
    if(reponse.ok) {
        return reponse.json()
    }
    throw new Error('Erreur serveur', {cause: reponse})
}



// let fetchData = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: new Headers({
//       'Content-Type': 'application/json; charset=UTF-8'
//     })
//   }