/**
 * Branche l'écouteur d'événement CHANGE sur l'élément DDN
 */
document.querySelector('#ddn').addEventListener(
    'change',
    function () {
        this.nextSibling.textContent = getAge(this.value) + ' ans';
    }
);

/**
 * Branche l'écouteur d'événement INPUT sur l'élément NIVEAU
 */
document.querySelector('#niveau').addEventListener(
    'input',
    function () {
        this.nextSibling.textContent = this.value;
    }
);

/**
 * Branche l'écouteur d'événement INPUT sur l'élément LANGUE
 */
document.querySelector('#langue').addEventListener(
    'input',
    function () {
        // Affiche message
        alert(traduceMessage(this.value));

        // Remplit liste pays avec AJAX et
        // l'API https://restcountries.com
        let sLang;
        switch (this.value.toUpperCase()) {
            case 'EN':
                sLang = 'english';
                break;
            case 'ES':
                sLang = 'spanish';
                break;
            case 'DE':
                sLang = 'german';
                break;
            default:
                sLang = 'french'
        }
        let sUrl = 'https://restcountries.com/v3.1/lang/' + sLang;

        // Prépare la requête
        let oXhr = new XMLHttpRequest();

        // Ouvre la requête
        oXhr.open('get', sUrl);

        // Envoie la requête vers le serveur
        oXhr.send(null);

        // Ecoute l'événement readyStateChange
        oXhr.addEventListener(
            'readystatechange',
            function () {
                // Si requête est terminée
                if (oXhr.readyState === 4 && (oXhr.status === 0 || oXhr.status === 200)) {
                    // Transforme le résultat en objet
                    let oData = JSON.parse(oXhr.responseText);
                    console.log(oData);

                    // Parcourt chaque pays du tableau
                    // et l'ajoute à la liste PAYS
                    let oPays = document.querySelector('#pays');
                    oPays.innerHTML = '';
                    let oOpt;
                    oData.forEach(pays => {
                        oOpt = document.createElement('option');
                        oOpt.value = pays.cca2; // Code pays
                        oOpt.textContent = pays.translations.fra.official;
                        oPays.appendChild(oOpt);
                    });
                }
            }
        );
    }
);

/**
 * Branche l'écouteur d'événement CLICK sur l'élément SELECTALL
 */
document.querySelector('#selectAll').addEventListener(
    'click',
    function () {
        // Tableau des cases à cocher
        // let aChecks = document.querySelectorAll('form fieldset:last-of-type input[type=checkbox][id^=pow]');
        let aChecks = document.querySelectorAll('form fieldset:last-of-type input[name]');
        // console.log(aChecks); // Vérif

        // Coche/Décoche chaque élément du tableau
        aChecks.forEach(elt => {
            elt.checked = this.checked;
        });
    }
);

/**
 * Gestion dark/light mode
 */
document.querySelector('#darkMode').addEventListener(
    'click',
    function () {
        // document.body.style.backgroundColor = 'black';
        // document.body.style.color = 'white';
        document.body.setAttribute('data-bs-theme', 'dark')
        document.body.style.transition = 'all 1s';
    }
);

document.querySelector('#lightMode').addEventListener(
    'click',
    function () {
        // document.body.style.backgroundColor = 'white';
        // document.body.style.color = 'black';
        document.body.setAttribute('data-bs-theme', 'light')
    }
);