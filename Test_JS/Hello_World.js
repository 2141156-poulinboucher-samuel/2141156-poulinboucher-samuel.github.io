const COULEUR_VERT = '008000';


// alert('Hello my friend');
function GetNom() {
    

let message = 'Quel est votre nom?';
let nom;
nom = prompt(message);

alert('Bonjour ' + nom);
let titre = document.getElementById('idTitre');
titre.innerHTML = 'Bonjour ' + nom;
}
// let continuer;
// continuer = confirm('Voulez vous continuer?');
// if (continuer) {
//     alert('On continue')
// } else {
//     alert('On arrête déja?')
// }

function GetSatisfaction() {
    let confirme = "Est-ce satisfaisant de faire du JavaScript";
    let resultat = confirm(confirme);
    if (resultat){
        alert('Super, on continue alors! ');
    } else {
        alert('Too bad so sad, on continue quand même! ');
    }
}

let titre = document.getElementById('idTitre');
titre.style.color = 'green';