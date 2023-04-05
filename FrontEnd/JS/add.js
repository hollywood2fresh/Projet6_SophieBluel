export default class AddProjet {

    constructor() {
        this.addProjetsForm = document.querySelector('.js-My-form')
        this.token = localStorage.getItem('token') 
        // select elements 
        this.baliseImage = document.getElementById('imageUrl')
        this.baliseTitle = document.getElementById('title')
        this.balisecategory = document.getElementById('category')
        this.labelTitle = document.getElementById('label-title')
        this.labelCategory = document.getElementById('label-category')
        // Création balises error 
        this.errorChampsObligatoire = document.createElement('p')
        this.addProjetsForm.append(this.errorChampsObligatoire)
        // this.labelTitle.classList.add('js-errorForm')
        // this.baliseTitle.classList.add('js-errorForm')
        // this.labelCategory.classList.add('js-errorForm')
        // this.balisecategory.classList.add('js-errorForm')
        // this.errorChampsObligatoire.classList.add('js-errorChampsObligatoire')
        // this.errorChampsObligatoire.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>Tous les champs sont obligatoires.'


        this.addEventListener()
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

    async addProjets(image, title, category) {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${this.token}`);
        
        let formdata = new FormData();
        formdata.append("category", category);
        formdata.append("title", title);
        formdata.append("image", image);
        
        if(image === undefined || title === '' || category === '') {
            if(image === undefined) {
                this.errorChampsObligatoire.classList.add('js-errorChampsObligatoire')
                this.errorChampsObligatoire.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>Tous les champs sont obligatoires.'
                // addEventListener('click', () => {
                //     this.errorChampsObligatoire.classList.remove('js-errorChampsObligatoire')
                //     this.errorChampsObligatoire.innerHTML = ''
                // })
            }
            if(title === '') {
                this.labelTitle.classList.add('js-errorForm')
                this.baliseTitle.classList.add('js-errorForm')
                this.errorChampsObligatoire.classList.add('js-errorChampsObligatoire')
                this.errorChampsObligatoire.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>Tous les champs sont obligatoires.'
                // addEventListener('click', () => {
                //     this.labelTitle.classList.remove('js-errorForm')
                //     this.baliseTitle.classList.remove('js-errorForm')
                //     this.errorChampsObligatoire.classList.remove('js-errorChampsObligatoire')
                //     this.errorChampsObligatoire.innerHTML = ''
                // })
            }
            if(category === '') {
                this.labelCategory.classList.add('js-errorForm')
                this.balisecategory.classList.add('js-errorForm')
                this.errorChampsObligatoire.classList.add('js-errorChampsObligatoire')
                this.errorChampsObligatoire.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>Tous les champs sont obligatoires.'
                // addEventListener('click', () => {
                //     this.labelCategory.classList.remove('js-errorForm')
                //     this.balisecategory.classList.remove('js-errorForm')
                //     this.errorChampsObligatoire.classList.remove('js-errorChampsObligatoire')
                //     this.errorChampsObligatoire.innerHTML = ''
                // })
            }
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


        console.log(image);


    }

}