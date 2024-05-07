// Insert your code here
console.log("Hello from login.js");

//on traite ici la partie pour s'inscrire

document.querySelector("#register").addEventListener("click", () => {
  const user = {
    name: document.querySelector("#registerName").value,
    email: document.querySelector("#registerEmail").value,
    password: document.querySelector("#registerPassword").value,
  };
//au click sur register on attribue les valeurs des champs a des variables

    fetch("https://weatherappbackend-dusky.vercel.app/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(response => response.json())
    .then(data => {
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
  });

//on traite ici la partie pour se connecter
document.querySelector("#connection").addEventListener("click", () => {
  const user = {
    email: document.querySelector("#connectionEmail").value,
    password: document.querySelector("#connectionPassword").value,
  };
//au click sur connection on attribue les valeurs des champs a des variables
        fetch ("https://weatherappbackend-dusky.vercel.app/users/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
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

