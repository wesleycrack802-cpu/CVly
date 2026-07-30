console.log("LOGIN OK");

const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const emailValue =
        email.value.trim().toLowerCase();

    const passwordValue =
        password.value;

    const users =
        JSON.parse(
            localStorage.getItem("cvlyUsers")
        ) || [];

    const user =
        users.find(function (user) {

            return (
                user.email === emailValue &&
                user.password === passwordValue
            );

        });

    if (!user) {

        alert(
            "Email ou mot de passe incorrect."
        );

        return;
    }

    // Enregistrer le compte actuellement connecté
    localStorage.setItem(
        "cvlyCurrentUser",
        JSON.stringify({
            firstName: user.firstName,
            email: user.email
        })
    );

    window.location.href =
        "dashboard.html";

});