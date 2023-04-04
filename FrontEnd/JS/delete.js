export default class DeleteProjet {

    constructor() {
        this.buttons = document.querySelectorAll('.container button')
        this.token = localStorage.getItem('token')
        this.seekId()
    }

    seekId() {
        this.buttons.forEach((button) => 
            button.addEventListener('click', () => {
                let id = button.id
                console.log(id);
                this.deleteProjet(id)
            })
        )
    }

    async deleteProjet(id) {
        const response = await fetch(`http://localhost:5678/api/works/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${this.token}`
            },
            body: JSON.stringify(this.buttons)
        });
        
        const data = await response.json()
        console.log(data);
    }

}