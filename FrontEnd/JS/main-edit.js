import { fetchJSON } from "./function/api.js";

import GalleryProjetAndFilter from "./class/filter.js";
import Modal from "./class/modal.js";
import DeleteProjet from "./class/delete.js";
import AddProjet from "./class/add.js";


// Filter
try {
    const projets = await fetchJSON('http://localhost:5678/api/works')
    let filtre = new GalleryProjetAndFilter(projets);
    filtre.afficherProjet(projets)
} catch (error) {
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


// Modal
const projetsModal = await fetchJSON('http://localhost:5678/api/works')
let modal = new Modal(projetsModal)
modal.afficherProjet(projetsModal);


// Delete projects
new DeleteProjet()


// Add projects
const categorie = await fetchJSON('http://localhost:5678/api/categories')
new AddProjet(categorie)
