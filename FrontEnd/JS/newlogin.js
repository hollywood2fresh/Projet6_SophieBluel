export default class Login {

    constructor() {
        this.loginForm = document.getElementById('login')
        this.baliseEmail = document.getElementById('email')
        this.baliseMotDePasse = document.getElementById('password')
        // Add elements for Errors messages
        this.errorLabelEmail = document.getElementById('label-email')
        this.errorEmail = document.getElementById('email')
        this.errorLabelPassword = document.getElementById('label-password')
        this.errorPassword = document.getElementById('password')
        // Create tags's error 
        this.errorChampsObligatoire = document.createElement('p')
        this.errorIncorrecte = document.createElement('p')

        this.addEventListener()
    }

    /**
     * When we click on submit button, it take data of form and send it in the login function
     */
    addEventListener() {
        this.loginForm.addEventListener('submit', (event) => {
            event.preventDefault()
            let email = this.baliseEmail.value
            let motDePasse = this.baliseMotDePasse.value
            this.login(email, motDePasse)
        })
    }

    /**
     * Send data in API and if the response is ok, give token 
     * 
     * @param {string} email 
     * @param {string} motDePasse 
     * 
     * If data is undefined -> error message 
     * BUT if data ok -> token is saved in localStorage
     */
    async login(email, motDePasse) {
        let user = {
            email: email,
            password: motDePasse
        }
        let response = await fetch('http://localhost:5678/api/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
          
        let result = await response.json()

        // Add to form
        this.loginForm.append(this.errorChampsObligatoire)
        this.loginForm.prepend(this.errorIncorrecte)

        if(user.email === '' || user.password === '') {
            if(user.email === '') {
                this.errorLabelEmail.classList.add('js-errorForm')
                this.errorEmail.classList.add('js-errorForm')
                this.errorChampsObligatoire.classList.add('js-errorChampsObligatoire')
                this.errorChampsObligatoire.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>Tous les champs sont obligatoires.'
                addEventListener('click', () => {
                    this.errorLabelEmail.classList.remove('js-errorForm')
                    this.errorEmail.classList.remove('js-errorForm')
                    this.errorChampsObligatoire.classList.remove('js-errorChampsObligatoire')
                    this.errorChampsObligatoire.innerHTML = ''
                })
            }
            if(user.password === '') {
                this.errorLabelPassword.classList.add('js-errorForm')
                this.errorPassword.classList.add('js-errorForm')
                this.errorChampsObligatoire.classList.add('js-errorChampsObligatoire')
                this.errorChampsObligatoire.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>Tous les champs sont obligatoires.'
                addEventListener('click', () => {
                    this.errorLabelPassword.classList.remove('js-errorForm')
                    this.errorPassword.classList.remove('js-errorForm')
                    this.errorChampsObligatoire.classList.remove('js-errorChampsObligatoire')
                    this.errorChampsObligatoire.innerHTML = ''
                })
            } 
        } else if(response.ok === false) {
            this.errorIncorrecte.classList.add('js-errorIncorrecte')
            this.errorIncorrecte.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>Merci de réessayer<br><span>E-mail ou mot de passe incorrectes</span>'
            addEventListener('click', () => {
                this.errorIncorrecte.classList.remove('js-errorIncorrecte')
                this.errorIncorrecte.innerHTML = ''
            })
        } else {
            window.location.assign('./index-edit.html')
            localStorage.setItem('token', result.token)
            localStorage.setItem('userId', result.userId)
        }
    }
}

let login = new Login()