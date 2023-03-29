
const reponse = await fetch('http://localhost:5678/api/works');
const projets = await reponse.json();

// ajout image 
function afficherProjet(projets) {
    for(let i = 0; i < projets.length; i++) {
        const article = projets[i];

        const imageWorks = document.createElement('img');
        imageWorks.src = article.imageUrl;

        const textWorks = document.createElement('figcaption');
        textWorks.innerText = 'éditer';

        const figure = document.createElement('figure');

        figure.append(imageWorks);
        figure.append(textWorks);

        const icondelete = document.createElement('div')
        icondelete.innerHTML ='<i class="fa-regular fa-trash-can"></i>';
        figure.append(icondelete)

        const divGalerie = document.querySelector(".container");

        divGalerie.append(figure);
    }
}

// galerie photo
afficherProjet(projets);

const btnModif = document.querySelector('.button-modif');
const modal = document.querySelector('.js-modal-galerie-photo')
const jsClose = document.querySelector('.fa-xmark')
const stopPro = document.querySelector('.js-modal-stop')


function openModal(e) {
    e.preventDefault()
    modal.classList.remove('modale-display-none')
    modal.removeAttribute('aria-hidden')
    modal.setAttribute('aria-modal', 'true')

    modal.addEventListener('click', closeModal)
    jsClose.addEventListener('click', closeModal)
    stopPro.addEventListener('click', stopPropagation)
}

function closeModal(e) {
    e.preventDefault()
    modal.classList.add('modale-display-none')
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    jsClose.removeEventListener('click', closeModal)
    stopPro.removeEventListener('click', stopPropagation)
}



btnModif.addEventListener('click', openModal);


// // ajout photo
const btnAjouterPhoto = document.querySelector('.js-ajouter-photo');
const ajoutModal = document.querySelector('.js-modal-ajout')
const stopAjoutPro = document.querySelector('.js-modal-ajout-stop')
const jsCloseTest = document.querySelector('.test')
const arrowRetour = document.querySelector('.fa-arrow-left')


function openModalAjout(e) {
    e.preventDefault()
    ajoutModal.classList.remove('modale-display-none')

    ajoutModal.removeAttribute('aria-hidden')
    ajoutModal.setAttribute('aria-modal', 'true')

    ajoutModal.addEventListener('click', closeModalAjout)
    jsCloseTest.addEventListener('click', closeModalAjout)
    stopAjoutPro.addEventListener('click', stopPropagation)
    arrowRetour.addEventListener('click', closeModalAjout)
    modal.classList.add('modale-display-none')
}

function closeModalAjout(e) {
    e.preventDefault()
    ajoutModal.classList.add('modale-display-none')
    ajoutModal.setAttribute('aria-hidden', 'true')
    ajoutModal.removeAttribute('aria-modal')
    ajoutModal.removeEventListener('click', closeModalAjout)
    jsCloseTest.removeEventListener('click', closeModalAjout)
    arrowRetour.addEventListener('click', openModal)
    stopAjoutPro.removeEventListener('click', stopPropagation)
}


function stopPropagation(e) {
    e.stopPropagation()
}

btnAjouterPhoto.addEventListener('click', openModalAjout);