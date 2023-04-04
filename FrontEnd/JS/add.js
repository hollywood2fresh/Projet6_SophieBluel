export default class AddProjet {

    constructor() {
        this.addProjetsForm = document.querySelector('.js-My-form')
        this.token = localStorage.getItem('token') 
        // select elements 
        this.baliseImage = document.getElementById('imageUrl')
        this.baliseTitle = document.getElementById('title')
        this.balisecategory = document.getElementById('category')

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
        formdata.append("image", image, image.name);
        
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