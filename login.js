// Insert your code here
console.log("Hello from login.js");

//on traite ici la partie pour s'inscrire

document.querySelector("#register").addEventListener("click", () => {
  const username = document.querySelector("#registerName").value;
  const password = document.querySelector("#registerPassword").value;
  const email = document.querySelector("#registerEmail").value;
//au click sur register on attribue les valeurs des champs a des variables

    fetch("https://wheatherapp4-backend.vercel.app/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
      }),
    }).then(response => response.json()).then(data => {
        //le.then permet d'attendre et recuperer la reponse de la requete
        //a la reponse on affiche un message d'erreur si l'utilisateur existe deja
        console.log(data);
        if (data.result === false) {
        alert(data.error);
        }
        else {
      alert("User created successfully");
      window.location.assign("index.html");
    }
    });
  }
);

//on traite ici la partie pour se connecter
document.querySelector("#connection").addEventListener("click", () => {
    const email = document.querySelector('#connectionEmail').value;
    const password = document.querySelector('#connectionPassword').value;
//au click sur connection on attribue les valeurs des champs a des variables
        fetch ("https://wheatherapp4-backend.vercel.app/users/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then(response => response.json()).then(data => {
            console.log(data); //le.then permet d'attendre et recuperer la reponse de la requete si la reponse est false (ce que l'on a indiqué dans la route signin) on affiche un message d'erreur
            if (data.result === false) {
                alert(data.error);
            } else {
                alert("User connected successfully");
                window.location.assign("index.html");
            }
        });
    }
);

//on traite ici la partie pour se deconnecter
//lorem ipsum

