console.log("LOGIN OK");

const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const emailValue = email.value.trim().toLowerCase();
    const passwordValue = password.value;

    // Récupérer les comptes enregistrés
    const users =
        JSON.parse(localStorage.getItem("cvlyUsers")) || [];

    // Chercher le compte
    const user = users.find(function (user) {

        return (
            user.email === emailValue &&
            user.password === passwordValue
        );

    });

    // Mauvais identifiants
    if (!user) {

        alert("Email ou mot de passe incorrect.");

        return;
    }

    // Connexion réussie
    localStorage.setItem(
        "cvlyCurrentUser",
        JSON.stringify({
            firstName: user.firstName,
            email: user.email
        })
    );

    // Aller vers le créateur de CV
    window.location.href = "create.html";

});