console.log("CVLY SCRIPT OK");


// ==================================================
// COMPTE CONNECTÉ
// ==================================================

const currentUser =
    JSON.parse(
        localStorage.getItem("cvlyCurrentUser")
    );


if (!currentUser) {

    alert(
        "Tu dois être connecté pour accéder à ton CV."
    );

    window.location.href =
        "login.html";

}


// ==================================================
// CLÉS UNIQUES POUR CHAQUE COMPTE
// ==================================================

const userEmail =
    currentUser.email;

const cvKey =
    "cvlyCV_" + userEmail;

const photoKey =
    "cvlyPhoto_" + userEmail;


// ==================================================
// CHAMPS DU FORMULAIRE
// ==================================================

const prenom =
    document.getElementById("prenom");

const nom =
    document.getElementById("nom");

const email =
    document.getElementById("email");

const telephone =
    document.getElementById("telephone");

const ville =
    document.getElementById("ville");

const profil =
    document.getElementById("profil");

const diplome =
    document.getElementById("diplome");

const etablissement =
    document.getElementById("etablissement");

const annee =
    document.getElementById("annee");

const poste =
    document.getElementById("poste");

const entreprise =
    document.getElementById("entreprise");

const description =
    document.getElementById("description");

const competences =
    document.getElementById("competences");


// ==================================================
// APERÇU
// ==================================================

const previewPrenom =
    document.getElementById("previewPrenom");

const previewNom =
    document.getElementById("previewNom");

const previewEmail =
    document.getElementById("previewEmail");

const previewTelephone =
    document.getElementById("previewTelephone");

const previewVille =
    document.getElementById("previewVille");

const previewProfil =
    document.getElementById("previewProfil");

const previewFormation =
    document.getElementById("previewFormation");

const previewExperience =
    document.getElementById("previewExperience");

const previewCompetences =
    document.getElementById("previewCompetences");


// ==================================================
// PHOTO
// ==================================================

const photoInput =
    document.getElementById("photoInput");

const profilePhoto =
    document.getElementById("profilePhoto");


// ==================================================
// MODÈLE
// ==================================================

const templateSelect =
    document.getElementById("templateSelect");

const preview =
    document.getElementById("preview");


// ==================================================
// SAUVEGARDER
// ==================================================

function sauvegarder() {

    const cv = {

        prenom:
            prenom.value,

        nom:
            nom.value,

        email:
            email.value,

        telephone:
            telephone.value,

        ville:
            ville.value,

        profil:
            profil.value,

        diplome:
            diplome.value,

        etablissement:
            etablissement.value,

        annee:
            annee.value,

        poste:
            poste.value,

        entreprise:
            entreprise.value,

        description:
            description.value,

        competences:
            competences.value,

        modele:
            templateSelect.value

    };


    localStorage.setItem(
        cvKey,
        JSON.stringify(cv)
    );

}


// ==================================================
// PRÉNOM
// ==================================================

prenom.addEventListener(
    "input",
    function () {

        previewPrenom.textContent =
            prenom.value ||
            "Ton prénom";

        sauvegarder();

    }
);


// ==================================================
// NOM
// ==================================================

nom.addEventListener(
    "input",
    function () {

        previewNom.textContent =
            nom.value ||
            "Ton nom";

        sauvegarder();

    }
);


// ==================================================
// EMAIL
// ==================================================

email.addEventListener(
    "input",
    function () {

        previewEmail.textContent =
            email.value ||
            "Ton email";

        sauvegarder();

    }
);


// ==================================================
// TÉLÉPHONE
// ==================================================

telephone.addEventListener(
    "input",
    function () {

        previewTelephone.textContent =
            telephone.value ||
            "Ton téléphone";

        sauvegarder();

    }
);


// ==================================================
// VILLE
// ==================================================

ville.addEventListener(
    "input",
    function () {

        previewVille.textContent =
            ville.value ||
            "Ta ville";

        sauvegarder();

    }
);


// ==================================================
// PROFIL
// ==================================================

profil.addEventListener(
    "input",
    function () {

        previewProfil.textContent =
            profil.value ||
            "Présentez-vous en quelques lignes...";

        sauvegarder();

    }
);


// ==================================================
// FORMATION
// ==================================================

function updateFormation() {

    const valeurs = [];


    if (diplome.value.trim()) {

        valeurs.push(
            diplome.value.trim()
        );

    }


    if (etablissement.value.trim()) {

        valeurs.push(
            etablissement.value.trim()
        );

    }


    if (annee.value.trim()) {

        valeurs.push(
            annee.value.trim()
        );

    }


    previewFormation.textContent =

        valeurs.length > 0

            ? valeurs.join(" — ")

            : "Ajoutez votre formation...";


    sauvegarder();

}


diplome.addEventListener(
    "input",
    updateFormation
);

etablissement.addEventListener(
    "input",
    updateFormation
);

annee.addEventListener(
    "input",
    updateFormation
);


// ==================================================
// EXPÉRIENCE
// ==================================================

function updateExperience() {

    const valeurs = [];


    if (poste.value.trim()) {

        valeurs.push(
            poste.value.trim()
        );

    }


    if (entreprise.value.trim()) {

        valeurs.push(
            entreprise.value.trim()
        );

    }


    if (description.value.trim()) {

        valeurs.push(
            description.value.trim()
        );

    }


    previewExperience.textContent =

        valeurs.length > 0

            ? valeurs.join(" — ")

            : "Ajoutez vos expériences professionnelles...";


    sauvegarder();

}


poste.addEventListener(
    "input",
    updateExperience
);

entreprise.addEventListener(
    "input",
    updateExperience
);

description.addEventListener(
    "input",
    updateExperience
);


// ==================================================
// COMPÉTENCES
// ==================================================

competences.addEventListener(
    "input",
    function () {

        previewCompetences.textContent =
            competences.value ||
            "Ajoutez vos compétences...";

        sauvegarder();

    }
);


// ==================================================
// PHOTO
// ==================================================

photoInput.addEventListener(
    "change",
    function () {

        const fichier =
            photoInput.files[0];


        if (!fichier) {

            return;

        }


        const lecteur =
            new FileReader();


        lecteur.onload =
            function (event) {

                profilePhoto.src =
                    event.target.result;

                profilePhoto.style.display =
                    "block";


                // PHOTO DU COMPTE
                localStorage.setItem(
                    photoKey,
                    event.target.result
                );

            };


        lecteur.readAsDataURL(
            fichier
        );

    }
);


// ==================================================
// MODÈLE
// ==================================================

function changerModele() {

    preview.classList.remove(
        "classic",
        "elegant",
        "modern"
    );


    preview.classList.add(
        templateSelect.value
    );

}


templateSelect.addEventListener(
    "change",
    function () {

        changerModele();

        sauvegarder();

    }
);


// ==================================================
// REMETTRE LE CV À ZÉRO
// ==================================================

function viderCV() {

    prenom.value =
        currentUser.firstName || "";

    nom.value = "";

    email.value = "";

    telephone.value = "";

    ville.value = "";

    profil.value = "";

    diplome.value = "";

    etablissement.value = "";

    annee.value = "";

    poste.value = "";

    entreprise.value = "";

    description.value = "";

    competences.value = "";


    // Aperçu

    previewPrenom.textContent =
        prenom.value ||
        "Ton prénom";

    previewNom.textContent =
        "Ton nom";

    previewEmail.textContent =
        "Ton email";

    previewTelephone.textContent =
        "Ton téléphone";

    previewVille.textContent =
        "Ta ville";

    previewProfil.textContent =
        "Présentez-vous en quelques lignes...";

    previewFormation.textContent =
        "Ajoutez votre formation...";

    previewExperience.textContent =
        "Ajoutez vos expériences professionnelles...";

    previewCompetences.textContent =
        "Ajoutez vos compétences...";


    // PHOTO

    profilePhoto.src = "";

    profilePhoto.style.display =
        "none";


    // MODÈLE

    templateSelect.value =
        "classic";

    changerModele();

}


// ==================================================
// CHARGER LE CV DU COMPTE
// ==================================================

function chargerCV() {

    const sauvegarde =
        localStorage.getItem(cvKey);


    // ----------------------------------------------
    // NOUVEAU COMPTE : RIEN À CHARGER
    // ----------------------------------------------

    if (!sauvegarde) {

        viderCV();

        return;

    }


    // ----------------------------------------------
    // CV EXISTANT
    // ----------------------------------------------

    const cv =
        JSON.parse(sauvegarde);


    prenom.value =
        cv.prenom || "";

    nom.value =
        cv.nom || "";

    email.value =
        cv.email || "";

    telephone.value =
        cv.telephone || "";

    ville.value =
        cv.ville || "";


    profil.value =
        cv.profil || "";


    diplome.value =
        cv.diplome || "";

    etablissement.value =
        cv.etablissement || "";

    annee.value =
        cv.annee || "";


    poste.value =
        cv.poste || "";

    entreprise.value =
        cv.entreprise || "";

    description.value =
        cv.description || "";


    competences.value =
        cv.competences || "";


    // ----------------------------------------------
    // APERÇU
    // ----------------------------------------------

    previewPrenom.textContent =
        prenom.value ||
        "Ton prénom";

    previewNom.textContent =
        nom.value ||
        "Ton nom";

    previewEmail.textContent =
        email.value ||
        "Ton email";

    previewTelephone.textContent =
        telephone.value ||
        "Ton téléphone";

    previewVille.textContent =
        ville.value ||
        "Ta ville";

    previewProfil.textContent =
        profil.value ||
        "Présentez-vous en quelques lignes...";


    updateFormation();

    updateExperience();


    previewCompetences.textContent =
        competences.value ||
        "Ajoutez vos compétences...";


    // ----------------------------------------------
    // MODÈLE
    // ----------------------------------------------

    if (cv.modele) {

        templateSelect.value =
            cv.modele;

        changerModele();

    }


    // ----------------------------------------------
    // PHOTO DU COMPTE
    // ----------------------------------------------

    const photo =
        localStorage.getItem(photoKey);


    if (photo) {

        profilePhoto.src =
            photo;

        profilePhoto.style.display =
            "block";

    } else {

        profilePhoto.src = "";

        profilePhoto.style.display =
            "none";

    }

}


// ==================================================
// CHARGEMENT INITIAL
// ==================================================

chargerCV();


// ==================================================
// PDF
// ==================================================

const generateCV =
    document.getElementById("generateCV");


generateCV.addEventListener(
    "click",
    function () {

        document.body.classList.add(
            "printing"
        );


        setTimeout(
            function () {

                window.print();


                setTimeout(
                    function () {

                        document.body.classList.remove(
                            "printing"
                        );

                    },
                    500
                );

            },
            100
        );

    }
);


console.log(
    "✅ CVly chargé pour : " +
    currentUser.email
);