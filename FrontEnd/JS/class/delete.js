export default class DeleteProjet {

    constructor() {
        this.buttons = document.querySelectorAll('.container button')
        this.token = localStorage.getItem('token')
        this.seekId()
    }

    /**
     * Select the id according to the project id
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
 *  Delete project of API
 * @param {number} id id project
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
        
        const data = await response.text()
    }
}