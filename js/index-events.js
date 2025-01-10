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

        // Remplit liste pays
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