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