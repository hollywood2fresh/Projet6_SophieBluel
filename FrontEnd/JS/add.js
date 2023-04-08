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
        // Create error tags 
        this.errorChampsObligatoire = document.createElement('p')
        this.addProjetsForm.append(this.errorChampsObligatoire)
        // Create choise of categories  
        this.sortDown = document.querySelector('.fa-sort-down')
        this.ul = document.createElement('ul')
        this.choiseCategoryInput = false
        this.imageAndTitleInput = false


        this.addEventListener()
        this.addEventListenerInput(imageUrl, title)
        this.selectedCategory()
        this.pressSortDown()
        this.clickSelectedCategoru()
        this.validationInput()
    }

    /**
     * Collect data form and call addProject function 
     */
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

    /**
     * Take form's data to create the new project
     * 
     * @param {files} image 
     * @param {string} title 
     * @param {number} category string is transformed of number 
     * 
     * It's possible to send data only if all fields are filled
     */
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

    /**
     * Provide to know if all fields are filled
     * 
     * @param {files} imageUrl 
     * @param {string} title 
     */
    addEventListenerInput(imageUrl, title) {
        this.addProjetsForm.addEventListener('input', () => {
            if(imageUrl.value != '' && title.value != '') {
                this.imageAndTitleInput = true
                this.validationInput()
            }
        })
        this.addProjetsForm.addEventListener('input', () => {
            if(imageUrl.value === '' || title.value === '') {
                this.imageAndTitleInput = false
                this.validationInput()
            }
        })
    }

    /**
     * Provide to know if all fields are filled - TRUE or FALSE 
     */
    validationInput() {
        // True & false 
        console.log(this.imageAndTitleInput);
        console.log(this.choiseCategoryInput);
        // Conditions 
        if(this.choiseCategoryInput === true && this.imageAndTitleInput === true) {
            this.btnValide.classList.remove('ok')
        }
        if(this.choiseCategoryInput === false || this.imageAndTitleInput === false) {
            this.btnValide.classList.add('ok')
        }
    }

    /**
     * Create one tag li per category to choise category
     */
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
        }
    }

    /**
     * When you click in arrow, call openSelectedCategory function 
     */
    pressSortDown() {
        this.sortDown.addEventListener('click', (event) => {
            this.openSelectedCategory(event)
        })
    }

    openSelectedCategory(event) {
        event.preventDefault()
        this.ul.classList.remove('js-selectCategory-none')
    }

    /**
     * Provide to take choise in input ???
     */
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
        this.ul.classList.add('js-selectCategory-none')
        this.choiseCategoryInput = true
        this.validationInput()
        // let choiseCategoryInputClick = this.choiseCategoryInput
        // console.log(choiseCategoryInputClick);
    }
}