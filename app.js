// Liste de compte sous forme d'objets dans un array
compte = {
    numero: 1,
    nom: "Christopher",
    solde: 2500,
};
blabla = {
    numero: 2,
    nom: "bloblo",
    solde: 10000,
}
// Actualisation du nom et du solde sur la page HTML dès le chargement de la page
actualiser(compte)

// Actualisation du nom et du solde sur la page HTML
function actualiser(compte){
    // Récupération de l'endroit où mettre le nom
    const nomDuCompte = document.querySelector('#account-name')
    // Injection du texte via textContent
    nomDuCompte.textContent = compte.nom
    // Récupération de l'endroit où mettre le nom
    const soldeDucompte = document.querySelector('.solde-amount')
    // Injection du texte via textContent
    soldeDucompte.textContent = compte.solde
}

const btnDepot = document.querySelector('#btn-depot')
// Ecouteur d'evenement sur le bouton du formulaire de dépôt
btnDepot.addEventListener('click', (e)=> {
    // Empêcher la validation du formulaire d'actualiser la page
    e.preventDefault()
    // Appel de la fonction pour effectuer le dépot
    let valeurDeDepot = depotSolde()
    ajoutHistorique(valeurDeDepot)
} )

// Effectuer le depot
function depotSolde(){
    // Récupération de l'input du formulaire
    const champDepot = document.querySelector('#inputDepot')
    // Transformation de la valeur de l'input en nombre grâce à parseInt()
    let valeurDepot = parseInt(champDepot.value)
    // Actualisation du solde du compte en ajoutant le dépot au solde existant
    compte.solde += valeurDepot
    // Actualisation du nom et du solde sur la page HTML
    actualiser(compte)
    // On remet la value de l'input vide pour réinitialiser le champ
    champDepot.value = ''
    // Appeler la fonction pour insérer le depot dans l'historique en passant l'information que c'est un depot
    return valeurDepot
}



function ajoutHistorique(valeur) {
    var date = new Date();

const formatDate = (current_datetime)=>{
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
    return formatted_date;
}
    const historique = document.querySelector('.historique-list')
    if (valeur < 0){
        const retraitTemplate = document.querySelector('#retrait')
        let cloneRetrait = document.importNode(retraitTemplate.content, true)
        cloneRetrait.querySelector('.value').textContent = valeur + '€'
        cloneRetrait.querySelector('.date').textContent = formatDate(date)
        historique.appendChild(cloneRetrait)
    } else {
        const depotTemplate = document.querySelector('#depot')
        let cloneDepot = document.importNode(depotTemplate.content, true)
        cloneDepot.querySelector('.value').textContent = '+ ' + valeur + '€'
        cloneDepot.querySelector('.date').textContent = formatDate(date)
        historique.appendChild(cloneDepot)
    }
}


// Ecouteur d'evenement sur le bouton du formulaire de dépôt

    // Empêcher la validation du formulaire d'actualiser la page

    // Appel de la fonction pour effectuer le retrait

// Effectuer le retrait
function retraitSolde(){
    const champRetrait = document.querySelector('#inputRetrait')
    let valeurRetrait = parseInt(-champRetrait.value)
    console.log(valeurRetrait);
    compte.solde += valeurRetrait
    actualiser(compte)
    champRetrait.value = ''
    return valeurRetrait
}
const btnRetrait = document.querySelector('#btn-retrait')

btnRetrait.addEventListener('click', (e)=> {
    // Empêcher la validation du formulaire d'actualiser la page
    e.preventDefault()
    // Appel de la fonction pour effectuer le dépot
    let valeurDeRetrait = retraitSolde()
    ajoutHistorique(valeurDeRetrait)
} )
    // Récupération de la valeur de l'input du formulaire

    // Transformation de la valeur de l'input en nombre grâce à parseInt()

    // Récupération de l'endroit où placer le message d'erreur/validation

    // Si la valeur du retrait est plus grande que le solde actuel

        // Message d'erreur négatif

        // Ajout de la classe negative pour mettre le texte en rouge


    // Sinon on effectue le retrait

        // Actualisation du solde du compte en retirant le retrait au solde existant

        // Message de validation

        // Ajout de la classe positive pour mettre le texte en vert

        // Actualisation du nom et du solde sur la page HTML

        // On remet la value de l'input vide pour réinitialiser le champ

        // Appeler la fonction pour insérer le retrait dans l'historique en passant l'information que c'est un retrait

// Insertion de l'opération dans l'historique en fonction du type d'opération reçue

    // Définition de la variable template vide pour la récupérer hors des conditions

    // Si le type d'opération est un depot

        // Récupération du template dans le HTML via un query selector

    // Si le type d'opération est un retrait

        // Récupération du template dans le HTML via un query selector

    // Importation du clone dans le DOM avec le contenu du template sans qu'il n'apparaisse nulle part pour le moment

    // Modification du clone avec les informations qu'on veut lui donner


    // Récupération de la div parente où importer le clone

    // Importation du clone enfant dans la div parente

