export default class DeleteProjet {

    constructor() {
        this.buttons = document.querySelectorAll('.container button')
        this.token = localStorage.getItem('token')
        this.seekId()
    }

    /**
     * Provide select id in terms of project id 
     */
    seekId() {
        this.buttons.forEach((button) => 
            button.addEventListener('click', () => {
                let id = button.id
                this.deleteProjet(id)
            })
        )
    }

/**
 * Provide delete projets of API
 * @param {number} id id projet
 */
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
    }
}