export default class AddProjet {

    constructor(categorie) {
        this.categorie = categorie
        this.addProjetsForm = document.querySelector('.js-My-form')
        this.token = localStorage.getItem('token') 
        // select elements 
        this.baliseImage = document.getElementById('imageUrl')
        this.baliseTitle = document.getElementById('title')
        this.balisecategory = document.getElementById('category')
        this.labelTitle = document.getElementById('label-title')
        this.labelCategory = document.getElementById('label-category')
        this.btnValide = document.querySelector('.ok')
        // Création balises error 
        this.errorChampsObligatoire = document.createElement('p')
        this.addProjetsForm.append(this.errorChampsObligatoire)
        // Création choix catégorie 
        this.sortDown = document.querySelector('.fa-sort-down')
        this.ul = document.createElement('ul')
        // console.log(this.addPictureModal);

        this.addEventListener()
        this.addEventListenerInput(imageUrl, title, category)
        this.selectedCategory()
        this.pressSortDown()
        this.clickSelectedCategoru()

        // console.log(this.categorie[0].name);
    }

    addEventListener() {
        this.addProjetsForm.addEventListener('submit', (event) => {
            event.preventDefault()
            let image = this.baliseImage.files[0]
            let title = this.baliseTitle.value
            let category = this.balisecategory.value
            switch(category) {
                case 'Objets':
                    category = '1';
                break;
                case 'Appartements':
                    category = '2';
                break;
                case 'Hotels & restaurants':
                    category = '3';
                break;
            }
            this.addProjets(image, title, category)
        })
    }

    addEventListenerInput(imageUrl, title, category) {
        this.addProjetsForm.addEventListener('input', () => {
            if(imageUrl.value != '' && title.value != '' && category.value != '') {
                this.btnValide.classList.remove('ok')
                console.log('test123');
            }
        })
        this.addProjetsForm.addEventListener('input', () => {
            if(imageUrl.value === '' || title.value === '' || category.value === '') {
                this.btnValide.classList.add('ok')
                console.log('test123');
            }
        })
    }

    selectedCategory() {
        this.addProjetsForm.append(this.ul)
        this.ul.classList.add('testtest')
        this.ul.classList.add('js-selectCategory-none')
        for(let i = 0; i < this.categorie.length; i++) {
            const li = document.createElement('li')
            li.classList.add(`js-selectCategory`)
            li.classList.add(`js-selectCategory${i}`)
            this.ul.append(li) 
            const theCategory = this.categorie[i].name
            li.append(theCategory)
            // console.log(li);
        }
    }


    pressSortDown() {
        this.sortDown.addEventListener('click', (event) => {
            this.openSelectedCategory(event)
            console.log('presse open modal');
        })
    }

    // stopPropagation(event) {
    //     event.stopPropagation()
    // }

    openSelectedCategory(event) {
        console.log('open modal');
        event.preventDefault()
        this.ul.classList.remove('js-selectCategory-none')
        // EventListener
        // this.categoryModal.addEventListener('click', () => {
        //     console.log('close modal');
        //     this.closeSelectedCategory(event)
        // })
        // this.ul.addEventListener('click', this.stopPropagation)
    }

    clickSelectedCategoru() {
        const liObjets = document.querySelector('.js-selectCategory0')
        const liAppartements = document.querySelector('.js-selectCategory1')
        const liHotelsEtRestaurants = document.querySelector('.js-selectCategory2')


        liObjets.addEventListener('click', () => {
            this.balisecategory.value = 'Objets'
            this.closeSelectedCategory()
        })
        liAppartements.addEventListener('click', () => {
            this.balisecategory.value = 'Appartements'
            this.closeSelectedCategory()
        })
        liHotelsEtRestaurants.addEventListener('click', () => {
            this.balisecategory.value = 'Hotels & restaurants'
            this.closeSelectedCategory()
        })
    }

    closeSelectedCategory() {
        console.log('close categorue');
        this.ul.classList.add('js-selectCategory-none')
    }

    async addProjets(image, title, category) {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${this.token}`);
        
        let formdata = new FormData();
        formdata.append("category", category);
        formdata.append("title", title);
        formdata.append("image", image);
        
        if(image === undefined || title === '' || category === '') {
                this.errorChampsObligatoire.classList.add('js-errorChampsObligatoire')
                this.errorChampsObligatoire.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>Tous les champs sont obligatoires.'
        } else {
            let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
            };
            
            fetch("http://localhost:5678/api/works", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
        }
    }

}