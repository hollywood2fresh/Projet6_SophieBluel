/**
 * This class add all projets in gallery and add filter 
 */
export default class GalleryProjetAndFilter {

    constructor(projets) {
        this.projets = projets
        this.allFilter()
        this.objectFilter()
        this.appartementFilter()
        this.hotelRestaurantFilter()
        this.selectButton()
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
            textWorks.innerText = article.title

            const figure = document.createElement('figure')
            figure.classList.add('figure-homepage')

            figure.append(imageWorks)
            figure.append(textWorks)

            const divGalerie = document.querySelector(".gallery")

            divGalerie.append(figure)
        }
    }

    /**
     * Change color of buttons filters whats are seleted 
     */
    selectButton() {
        let listBtn = document.querySelectorAll('.btn-filter button')

        listBtn.forEach(button => {
            button.addEventListener('click', function () {
                listBtn.forEach(btn => btn.classList.remove('btn-filter-selected'))
                this.classList.add('btn-filter-selected')
            })
        })
    }

    /**
     * Filter All projets 
     */
    allFilter() {
        const boutonFiltrerTous = document.querySelector(".btn-filter-tous")

        boutonFiltrerTous.addEventListener('click', () => {
            const projetFilter = this.projets.filter(function (projet) {
                return projet.categoryId === 1 || 2 || 3
            })
            document.querySelector('.gallery').innerHTML = "";
            this.afficherProjet(projetFilter)
        })
    }

    /**
     * Filter projets had Objets category 
     */
    objectFilter() {
        const boutonFiltrerObjets = document.querySelector(".btn-filter-objets")

        boutonFiltrerObjets.addEventListener('click', () => {
            const projetFilter = this.projets.filter(function (projet) {
                return projet.categoryId === 1
                
            })
            document.querySelector('.gallery').innerHTML = "";
            this.afficherProjet(projetFilter)
        })
    }

    /**
     * Filter projets had Appartements category 
     */
    appartementFilter() {
        const boutonFiltrerAppartements = document.querySelector(".btn-filter-appartements")

        boutonFiltrerAppartements.addEventListener('click', () => {
            const projetFilter = this.projets.filter(function (projet) {
                return projet.categoryId === 2
                
            })
            document.querySelector('.gallery').innerHTML = "";
            this.afficherProjet(projetFilter)
        })
    }

    /**
     * Filter projets had Hotels & Restaurantes category 
     */
    hotelRestaurantFilter() {
        const boutonFiltrerHotelsRestaurants = document.querySelector(".btn-filter-hotels-et-restaurants")

        boutonFiltrerHotelsRestaurants.addEventListener('click', () => {
            const projetFilter = this.projets.filter(function (projet) {
                return projet.categoryId === 3
                
            })
            document.querySelector('.gallery').innerHTML = "";
            this.afficherProjet(projetFilter)
        })
    }
}