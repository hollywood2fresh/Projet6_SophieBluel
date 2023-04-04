export default class Filter {

    constructor(projets) {
        this.projets = projets
        this.allFilter();
        this.objectFilter();
        this.appartementFilter();
        this.hotelRestaurantFilter();
        this.selectButton()
    }

    selectButton() {
        let listBtn = document.querySelectorAll('.btn-filter button')

        listBtn.forEach(button => {
            button.addEventListener('click', function () {
                listBtn.forEach(btn => btn.classList.remove('btn-filter-selected'))
                this.classList.add('btn-filter-selected')
            })
        })
    }

    afficherProjet(projets) {
        for(let i = 0; i < projets.length; i++) {
            const article = projets[i];

            const imageWorks = document.createElement('img');
            imageWorks.src = article.imageUrl;

            const textWorks = document.createElement('figcaption');
            textWorks.innerText = article.title;

            const figure = document.createElement('figure');
            figure.classList.add('figure-homepage')

            figure.append(imageWorks);
            figure.append(textWorks);

            const divGalerie = document.querySelector(".gallery");

            divGalerie.append(figure);
        }
    }

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