console.log("REGISTER OK");

const registerForm =
    document.getElementById("registerForm");

const firstName =
    document.getElementById("firstName");

const email =
    document.getElementById("email");

const password =
    document.getElementById("password");

const confirmPassword =
    document.getElementById("confirmPassword");

const message =
    document.getElementById("message");


registerForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const prenom =
            firstName.value.trim();

        const emailValue =
            email.value.trim().toLowerCase();

        const passwordValue =
            password.value;

        const confirmPasswordValue =
            confirmPassword.value;


        // =========================
        // MOT DE PASSE
        // =========================

        if (passwordValue.length < 6) {

            message.textContent =
                "Le mot de passe doit contenir au moins 6 caractères.";

            return;
        }


        // =========================
        // CONFIRMATION
        // =========================

        if (
            passwordValue !==
            confirmPasswordValue
        ) {

            message.textContent =
                "Les mots de passe ne correspondent pas.";

            return;
        }


        // =========================
        // UTILISATEURS
        // =========================

        const users =
            JSON.parse(
                localStorage.getItem("cvlyUsers")
            ) || [];


        // =========================
        // EMAIL EXISTANT
        // =========================

        const existingUser =
            users.find(
                user =>
                    user.email === emailValue
            );


        if (existingUser) {

            message.textContent =
                "Un compte existe déjà avec cet email.";

            return;
        }


        // =========================
        // CRÉER LE COMPTE
        // =========================

        const newUser = {

            firstName: prenom,

            email: emailValue,

            password: passwordValue

        };


        users.push(newUser);


        localStorage.setItem(
            "cvlyUsers",
            JSON.stringify(users)
        );


        // =========================
        // CONNECTER AUTOMATIQUEMENT
        // =========================

        localStorage.setItem(
            "cvlyCurrentUser",
            JSON.stringify({

                firstName: prenom,

                email: emailValue

            })
        );


        message.textContent =
            "Compte créé avec succès !";


        setTimeout(
            function () {

                window.location.href =
                    "dashboard.html";

            },
            700
        );

    }
);