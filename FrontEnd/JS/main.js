import { fetchJSON } from "./api.js";

import GalleryProjetAndFilter from "./filter.js";
import Modal from "./modal.js";
import DeleteProjet from "./delete.js";
import AddProjet from "./add.js";

const categorie = await fetchJSON('http://localhost:5678/api/categories')

try {
const projets = await fetchJSON('http://localhost:5678/api/works')
// Filter
let filtre = new GalleryProjetAndFilter(projets);
filtre.afficherProjet(projets)
// Modal
let modal = new Modal(projets)
modal.afficherProjet(projets);
// Delete projets
let aChanger = new DeleteProjet()
// Add projets
let additional = new AddProjet(categorie)

} catch (error) {
    console.log('tezst');
    const gallery = document.querySelector('.gallery')
    const divError = document.createElement('div')
    gallery.append(divError)
    divError.classList.add('error404')
    divError.innerHTML =
    `
    <i class="fa-solid fa-circle-exclamation"></i>
    <p>Oops!</p>
    <p>Error 404</p>
    <p>Impossible de charger la galerie</p>
    `
}







