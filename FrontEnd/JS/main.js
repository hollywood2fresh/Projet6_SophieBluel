const reponse = await fetch('http://localhost:5678/api/works');
const projets = await reponse.json();

const reponseCategorie = await fetch('http://localhost:5678/api/categories');
const categorie = await reponseCategorie.json();
// /categories




import Filter from "./filter.js";
let filtre = new Filter(projets);
filtre.afficherProjet(projets)

import Modal from "./modal.js";
let modal = new Modal(projets)
modal.afficherProjet(projets);

import DeleteProjet from "./delete.js";
let aChanger = new DeleteProjet()

import AddProjet from "./add.js";
let additional = new AddProjet(categorie)






// const addProjetsForm = document.querySelector('.js-My-form')
// const token = localStorage.getItem('token')

// addProjetsForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     // select elements 
//     let baliseImage = document.getElementById('imageUrl')
//     let baliseTitle = document.getElementById('title')
//     let balisecategory = document.getElementById('category')
//     // select value
//     let image = baliseImage.files[0]
//     let title = baliseTitle.value
//     let category = balisecategory.value
//     switch(category) {
//         case 'Objets':
//             category = '1';
//         break;
//         case 'Appartements':
//             category = '2';
//         break;
//         case 'Hotels & restaurants':
//             category = '3';
//         break;
//     }
//     console.log(category);
//     // console.log
//     console.log(image, title, category);
//     addProjets(image, title, category)
// })

// async function addProjets(image, title, category) {
//     let myHeaders = new Headers();
//     myHeaders.append("Authorization", `Bearer ${token}`);
    
//     let formdata = new FormData();
//     formdata.append("category", category);
//     formdata.append("title", title);
//     formdata.append("image", image, image.name);
    
//     let requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: formdata,
//       redirect: 'follow'
//     };
    
//     fetch("http://localhost:5678/api/works", requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
// }



// const addProjetsForm = document.querySelector('.js-My-form')
// const token = localStorage.getItem('token')
// const userId = localStorage.getItem('userId')



// addProjetsForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     // select element 
//     let baliseImage = document.getElementById('imageUrl')
//     let baliseTitle = document.getElementById('title')
//     let balisecategory = document.getElementById('category')
//     // select value
//     let image = baliseImage.files[0]
//     console.log(image);
//     let title = baliseTitle.value
//     let category = baliseTitle.value
//     // console.log
//     console.log(image, title, category);
//     addProjets(image, title, category)
// })

// async function addProjets(image, title, category) {
//     // let form = {
//     //     title: title,
//     //     image: image,
//     //     category: category,
//     // }
//     const formData = new FormData()
//     formData.append('category', category)
//     formData.append('title', title)
//     formData.append('image', image, image.name)
//     // console.log(form);
//     console.log(formData);
//     for (const [key, value] of formData.entries()) {
//         console.log(key, value);
//       }
//     let addreponse = await fetch('http://localhost:5678/api/works', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'multipart/form-data; boundary=---------------------------123456789012345678901234567890',
//             'Authorization': `bearer ${token}`
//         },
//         body: formData
//     })
//     console.log(addreponse);
//     // const config = {
//     //     headers: {
//     //       'Content-Type': 'multipart/form-data',
//     //       Authorization: `bearer ${token}`,
//     //     },
//     //   };
    
//     //   try {
//     //     const response = await axios.post('http://localhost:5678/api/works', formData, config);
//     //     console.log(response.data);
//     //   } catch (error) {
//     //     console.error(error);
//     //   }
//     let addresult = await addreponse.json()

//     console.log(addresult);
// }

// --------------------------------------------



// const addProjetsForm = document.querySelector('.js-My-form')
// const token = localStorage.getItem('token')
// // const userId = localStorage.getItem('userId')



// addProjetsForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     // select element 
//     const formData = new FormData(addProjetsForm)

//     const res = Object.fromEntries(formData);  

//     for(let item of formData) {
//         console.log(item[0], item[1]);
//     }
//     addProjets(res)
// })

// async function addProjets(res) {
//     let addreponse = await fetch('http://localhost:5678/api/works', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'multipart/form-data; boundary=---------------------------123456789012345678901234567890',
//             'Authorization': `bearer ${token}`
//         },
//         body: JSON.stringify(res)
//     })
//     console.log(addreponse);

//     let addresult = await addreponse.json()

//     console.log(addresult);
// }



// --------------------------------------------



























// const addProjetsForm = document.querySelector('.js-My-form')
// const token = localStorage.getItem('token')

// addProjetsForm.addEventListener('submit', (event) => {
//     event.preventDefault()

//     const formData = new FormData(addProjetsForm)

//     const res = Object.fromEntries(formData);  
//     const payload = JSON.stringify(res)  

//     for(let item of formData) {
//         console.log(item[0], item[1]);
//     }

//     let addreponse = await fetch('http://localhost:5678/api/works', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         'Authorization': `bearer ${token}`
//     },
//     body: payload
//     })
    
//     let addresult = await addreponse.json()

//     console.log(addresult);
// })






//     const formData = new FormData(addProjetsForm)

//     for(let item of formData) {
//         console.log(item[0], item[1]);
//     }

//     let addreponse = await fetch('http://localhost:5678/api/works', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         'Authorization': `bearer ${token}`
//     },
//     body: payload
//     })
    
//     let addresult = await addreponse.json()

//     console.log(addresult);
// })










// const form = document.querySelector('.js-My-form')
// const token = localStorage.getItem('token')



// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const formData = new FormData(form)

//     for(let item of formData) {
//         console.log(item[0], item[1]);
//     }

//     async function addProjet() {
//         const reponse = await fetch('http://localhost:5678/api/works', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//                 'Authorization': `bearer ${token}`
//             },
//             body: JSON.stringify(form)
//         })
        
//         let result = await reponse.json()
//     }
    
//     addProjet()
// })

// console.log(form);




// const form = document.querySelector('.js-My-form')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const formData = new FormData(form)

//     const res = Object.fromEntries(formData);
//     const payload = JSON.stringify(res)
//     console.log(payload);

//     for(let item of formData) {
//         console.log(item[0], item[1]);
//     }

//     fetch('http://localhost:5678/api/works', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: payload
//     })
//         .then(res => res.json())
//         .then(res => console.log(res));
// })


// let buttons = document.querySelectorAll('.container button')
// const token = localStorage.getItem('token')

// buttons.forEach((button) => 
//     button.addEventListener('click', () => {
//         let id = button.id
//         console.log(id);
//         deleteProjet(id)
//     })
// )

// async function deleteProjet(id) {
//     const response = await fetch(`http://localhost:5678/api/works/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `bearer ${token}`
//         },
//         body: JSON.stringify(buttons)
//     });
    
//     const data = await response.json()
//     console.log(data);
// }




// let supprimerProjet = document.querySelectorAll('.fa-trash-can')
// let index = 0



// for(let i = 0; i < supprimerProjet.length - 1; i++) {
//     console.log(`boucle for ${i}`);
//     supprimerProjet[index].addEventListener('click', () => {
//         console.log(`addEventListener ${index}`);
//     })
//     index++
// }



// console.log(supprimerProjet);



// async function deleteProjet() {
//     let supprimerProjet = document.querySelectorAll('.fa-trash-can')
//     console.log(supprimerProjet);
//     let response = await fetch(`http://localhost:5678/api/works/{id}`, {
//         method: 'DELETE'
//     })

//     let resultat = await response.json()

//     console.log();
// }






// deleteProjet()


