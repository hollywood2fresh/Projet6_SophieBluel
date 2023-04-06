import { fetchJSON } from "./api.js";

import Filter from "./filter.js";

import Modal from "./modal.js";

const categorie = await fetchJSON('http://localhost:5678/api/categories')

import DeleteProjet from "./delete.js";
let aChanger = new DeleteProjet()

import AddProjet from "./add.js";
let additional = new AddProjet(categorie)

try {
    const projets = await fetchJSON('http://localhost:5678/ai/works')
    // Filter
    let filtre = new Filter(projets);
    filtre.afficherProjet(projets)
    // Modal
    let modal = new Modal(projets)
    modal.afficherProjet(projets);
} catch (error) {
    const gallery = document.querySelector('.gallery')
    gallery.classList.add('error404')
    gallery.innerHTML =
    `
    <p>Oops!</p>
    <p>Error 404</p>
    <p>Impossible de charger la galerie</p>
    `
}






