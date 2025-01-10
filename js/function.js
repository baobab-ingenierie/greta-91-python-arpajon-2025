// https://jsdoc.app/

/**
 * Routine qui ajoute une alerte au document HTML en
 * utilisant le DOM
 * @param {string} sMsg - Message à afficher dans l'alerte
 */
function makeAlert(sMsg = 'Bonjour !') {
    // Variables objet
    let oDiv, oStrong, oButton;

    oDiv = document.createElement('div');
    oDiv.setAttribute('class', 'alert alert-info alert-dismissible fade show');
    oDiv.textContent = sMsg;

    oStrong = document.createElement('strong');
    oStrong.textContent = 'Information ! ';

    oButton = document.createElement('button');
    oButton.type = 'button';
    oButton.className = 'btn-close';
    oButton.setAttribute('data-bs-dismiss', 'alert')

    oDiv.prepend(oStrong);
    oDiv.appendChild(oButton);
    document.body.appendChild(oDiv);
}

/**
 * Fonction qui retourne le message "Modification effectuée"
 * selon la langue choisie
 * @param {string} sLang - Langue du message à afficher (FR, DE, ES et EN)
 * @return {string} Message traduit dans la langue demandée
 */
function traduceMessage(sLang = 'FR') {
    let sMsg = '';
    switch (sLang.toLocaleUpperCase()) {
        case 'EN':
            sMsg = 'Update done!'
            break;
        case 'DE':
            sMsg = 'Änderung vorgenommen'
            break;
        case 'ES':
            sMsg = 'Modificación realizada'
            break;
        default:
            sMsg = 'Modification effectuée'
            break;
    }
    return sMsg;
}

/**
 * Fonction qui renvoie l'âge en années en fonction d'une date
 * @param {string} dBirthday - Date de naissance 
 * @returns {number} Âge en années
 */
function getAge(dBirthday) {
    // Génère la date
    let dDate = new Date(dBirthday);

    // Teste si date
    if (dDate instanceof Date && !isNaN(dDate)) {
        let iResult = Math.floor((Date.now() - dDate) / 1000 / 60 / 60 / 24 / 365.25);
        return iResult;
    } else {
        // console.error('Le format de date fourni est incorrect.');
        throw 'Le format de date fourni est incorrect.';
    }
}