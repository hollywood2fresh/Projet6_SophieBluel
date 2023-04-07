/**
 * This class provide add modals for delete et add projets 
 */
export default class Modal {

    constructor() {
        // Edit button homepage
        this.editButton = document.querySelector('.button-modif')
        // Selectors first modal
        this.galleryModal = document.querySelector('.js-modal-galerie-photo')
        this.galleryModal = document.querySelector('.js-modal-galerie-photo')
        this.galleryModalClose = document.querySelector('.fa-xmark')
        this.galleryModalStopPropagation = document.querySelector('.js-modal-stop')
        // Selectors secondes modal
        this.addPictureButton = document.querySelector('.js-addPicture')
        this.addPictureModal = document.querySelector('.js-modal-ajout')
        this.addPictureModalClose = document.querySelector('.js-closeModal')
        this.addPictureModalStopPropagation = document.querySelector('.js-modal-ajout-stop')
        this.addPictureModalReturnArrow = document.querySelector('.fa-arrow-left')

        this.pressButton()
        this.pressAddPicture()
    }

    /**
     * Add all projets in API /works
     * @param {fetch} projets add projets since API
     */
    afficherProjet(projets) {
        for(let i = 0; i < projets.length; i++) {
            const article = projets[i]
    
            const imageWorks = document.createElement('img')
            imageWorks.src = article.imageUrl
    
            const textWorks = document.createElement('figcaption')
            textWorks.innerText = 'éditer'
    
            const figure = document.createElement('figure')
    
            figure.append(imageWorks)
            figure.append(textWorks)
    
            const icondelete = document.createElement('button')
            icondelete.id = article.id
            icondelete.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
            figure.append(icondelete)
    
            const divGalerie = document.querySelector(".container")
    
            divGalerie.append(figure)
        }
    }

    /**
     * What are press on the edit button, call the openGalleryModal Function 
     */
    pressButton() {
        this.editButton.addEventListener('click', (event) => {
            this.openGalleryModal(event)
        })
    }

    /**
     * What are press on the Add picture button, call the openAddPictureModal Function 
     */
    pressAddPicture() {
        this.addPictureButton.addEventListener('click', (event) => {
            this.openAddPictureModal(event)
        })
    }

    stopPropagation(event) {
        event.stopPropagation()
    }

    /**
     * Provide open modal 'Galerie photo'
     */
    openGalleryModal(event) {
        event.preventDefault()
        this.galleryModal.classList.remove('modale-display-none')
        this.galleryModal.removeAttribute('aria-hidden')
        this.galleryModal.setAttribute('aria-modal', 'true')
        // EventListener
        this.galleryModal.addEventListener('click', () => {
            this.closeGalleryModal(event)
        })
        this.galleryModalClose.addEventListener('click', () => {
            this.closeGalleryModal(event)
        })
        this.galleryModalStopPropagation.addEventListener('click', this.stopPropagation)
    }

    /**
     * Provide close modal 'Galerie photo'
     */
    closeGalleryModal(event) {
        event.preventDefault()
        this.galleryModal.classList.add('modale-display-none')
        this.galleryModal.setAttribute('aria-hidden', 'true')
        this.galleryModal.removeAttribute('aria-modal')
        // EventListener
        this.galleryModal.removeEventListener('click', () => {
            this.closeGalleryModal(event)
        })
        this.galleryModalClose.removeEventListener('click', () => {
            this.closeGalleryModal(event)
        })
        this.galleryModalStopPropagation.removeEventListener('click', this.stopPropagation)
    }

    /**
     * Provide open modal 'Ajout photo'
     * 
     * But if click on arrow, return in modal 'Galerie photo'
     */
    openAddPictureModal(event) {
        event.preventDefault()
        this.addPictureModal.classList.remove('modale-display-none')
        this.addPictureModal.removeAttribute('aria-hidden')
        this.addPictureModal.setAttribute('aria-modal', 'true')
        this.galleryModal.classList.add('modale-display-none')
        // EventListener
        this.addPictureModal.addEventListener('click', () => {
            this.closeAddPictureModal(event)
        })
        this.addPictureModalClose.addEventListener('click', () => {
            this.closeAddPictureModal(event)
        })
        this.addPictureModalStopPropagation.addEventListener('click', this.stopPropagation)
        this.addPictureModalReturnArrow.addEventListener('click', () => {
            this.closeAddPictureModal(event)
        })
        this.addPictureModalReturnArrow.addEventListener('click', () => {
            this.openGalleryModal(event)
        })
    }

    /**
     * Provide close modal 'Ajout photo'
     */
    closeAddPictureModal(event) {
        event.preventDefault()
        this.addPictureModal.classList.add('modale-display-none')
        this.addPictureModal.setAttribute('aria-hidden', 'true')
        this.addPictureModal.removeAttribute('aria-modal')
        this.addPictureModal.removeEventListener('click', () => {
            this.closeAddPictureModal(event)
        })
        this.addPictureModalClose.removeEventListener('click', () => {
            this.closeAddPictureModal(event)
        })
        this.addPictureModalStopPropagation.removeEventListener('click', this.stopPropagation)

    }
}
