const loginForm = document.getElementById('login');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let baliseEmail = document.getElementById('email');
  let baliseMotDePasse = document.getElementById('password');
  let email = baliseEmail.value;
  let motDePasse = baliseMotDePasse.value;
  console.log(email, motDePasse);
login(email, motDePasse)
})


async function login(email, motDePasse) {
  let user = {
    email: email,
    password: motDePasse
  };
  console.log(user);
  let response = await fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }); 
  console.log(response.ok);
  
  let result = await response.json();
  console.log(result);
  let erreur = document.getElementById('erreur')
  if(response.ok === false) {
    erreur.innerHTML = 'Identifiant ou mot de passe incorrect'
  } else {
    window.location.assign('./index-edit.html')
  }
}





// document.getElementById('login').addEventListener('submit', function(e) { 
    

//     let erreur;

//     if(erreur) {
//         e.preventDefault(); // empecher le comportement par default du formulaire 
//         document.getElementById('erreur').innerHTML = erreur;
//         return false;
//     } else {
//         alert('formulaire envoyé !!')
//     }

//     // let email = document.getElementById('email');
//     // let motDePasse = document.getElementById('password');

    
//     // if(!motDePasse.value) {
//     //     erreur = "Veuillez renseigner votre mot de passe";
//     // }
//     // if(!email.value) {
//     //     erreur = "Veuillez renseigner votre e-mail";
//     // }
    
   
// })

// let users = {
//     name: 
// }

// async function postData(url = '', data = {}) {
//     const response = await fetch('http://localhost:5678/api/users', {
//         method: 'POST'
//         headers: {
//             'Content-Type': 'application/json'
//         }
//         body: JSON.stringify(data)
//     });
//     return response.json();
// }

// let user = {
//     name: 'John',
//     surname: 'Smith'
//   };
  
//   let response = await fetch('http://localhost:5678/api/users/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user)
//   });
  
//   let result = await response.json();
//   alert(result.message);

//   console.log(user);