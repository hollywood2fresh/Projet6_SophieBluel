import { fetchJSON } from "./api.js";

import GalleryProjetAndFilter from "./filter.js";
import Modal from "./modal.js";
import DeleteProjet from "./delete.js";
import AddProjet from "./add.js";


// Filter
try {
    const projets = await fetchJSON('http://localhost:5678/api/works')
    let filtre = new GalleryProjetAndFilter(projets);
    filtre.afficherProjet(projets)


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


// Modal
const projetsModal = await fetchJSON('http://localhost:5678/api/works')
let modal = new Modal(projetsModal)
modal.afficherProjet(projetsModal);


// Delete projects
let aChanger = new DeleteProjet()


// Add projects
const categorie = await fetchJSON('http://localhost:5678/api/categories')
let additional = new AddProjet(categorie)



// const input = document.getElementById('category')
// const image = document.querySelector('.div-ajout-photo')
// const selectImageForm = document.createElement('img')
// selectImageForm.classList.add('js-selectImageForm')
// image.append(selectImageForm.result)



// function readURL(input) {

//         let reader = new FileReader()

//         reader.onload = function (e) {

//             selectImageForm.src = e.target.result
//         }
//         reader.readAsDataURL(input.files[0])

// }

// readURL()



