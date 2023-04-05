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
        this.btnValide = document.querySelector('.ok')
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
        this.addEventListenerInput(imageUrl, title, category)
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