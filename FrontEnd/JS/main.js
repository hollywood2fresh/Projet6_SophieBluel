const reponse = await fetch('http://localhost:5678/api/works');
const projets = await reponse.json();


function afficherProjet(projets) {
    for(let i = 0; i < projets.length; i++) {
        const article = projets[i];

        const imageWorks = document.createElement('img');
        imageWorks.src = article.imageUrl;

        const textWorks = document.createElement('figcaption');
        textWorks.innerText = article.title;

        const figure = document.createElement('figure');

        figure.append(imageWorks);
        figure.append(textWorks);

        const divGalerie = document.querySelector(".gallery");

        divGalerie.append(figure);
    }
}

afficherProjet(projets);


// showSelectDot() {
//     let listSpan = document.querySelectorAll('.dot')
//     listSpan[this.oldIndex].classList.remove('dot_selected')
//     listSpan[this.index].classList.add('dot_selected')
// }


// fitre Tous
const boutonFiltrerTous = document.querySelector(".btn-filter-tous")

boutonFiltrerTous.addEventListener('click', function() {
    const projetFilter = projets.filter(function (projet) {
        return projet.categoryId === 1 || 2 || 3
    })
    document.querySelector('.gallery').innerHTML = "";
    afficherProjet(projetFilter)
})

// filtre object
const boutonFiltrerObjets = document.querySelector(".btn-filter-objets")

boutonFiltrerObjets.addEventListener('click', function() {
    const projetFilter = projets.filter(function (projet) {
        return projet.categoryId === 1
        
    })
    document.querySelector('.gallery').innerHTML = "";
    afficherProjet(projetFilter)
})

// filtre appartement 
const boutonFiltrerAppartements = document.querySelector(".btn-filter-appartements")

boutonFiltrerAppartements.addEventListener('click', function() {
    const projetFilter = projets.filter(function (projet) {
        return projet.categoryId === 2
        
    })
    document.querySelector('.gallery').innerHTML = "";
    afficherProjet(projetFilter)
})

// filtre hotels et restaurants
const boutonFiltrerHotelsRestaurants = document.querySelector(".btn-filter-hotels-et-restaurants")

boutonFiltrerHotelsRestaurants.addEventListener('click', function() {
    const projetFilter = projets.filter(function (projet) {
        return projet.categoryId === 3
        
    })
    document.querySelector('.gallery').innerHTML = "";
    afficherProjet(projetFilter)
})
