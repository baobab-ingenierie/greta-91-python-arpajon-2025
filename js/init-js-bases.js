/**
 * Routine pour tester variables
 */
function testVariables() {
    // Variables primitives
    // let fname = 'Danis';
    let fname = prompt('Salut, quel est ton prénom ?', 'Danis');
    let age = 26;
    let manager = true;

    // Renvoi d'un message dans la console
    console.info('Bonjour, je m\'appelle ' + fname + ' et j\'ai ' + age + ' ans.');
}

/**
 * A la fin du chargement du document (DOM-0)
 */
window.onload = function () {
    // Appelle les fonctions écrites précédemment
    testVariables();
    testTableau();
    testObjet();
    testStructures();
};

/**
 * Variables composites
 */
function testTableau() {
    // Déclaration littérale
    let cand1 = [
        'Jarfar',
        27,
        false
    ];
    console.log(cand1.length);

    // Avec une classe
    let cand2 = new Array(); // Classe Array est un modèle
    cand2[0] = 'Dan';
    cand2[1] = 20;
    cand2[2] = ['Front-end', 'Back-end', 'SQL', 'TypeScript', 'Langage C'];
    cand2[11] = false;
    console.log(cand2.length);

    // Renvoi message
    console.info('Bonjour, je m\'appelle ' + cand1[0] + ' et j\'ai ' + cand1[1] + ' ans');

    console.info('Bonjour, je m\'appelle ' + cand2[0] + ', j\'ai ' + cand2[1] + ' ans et je suis compétente en ' + cand2[2][cand2[2].length - 1]);
}

/**
 * Variables objet
 */
function testObjet() {
    // Objet littéral
    let cand3 = {
        'fname': 'Lucas',
        'dob': '2002-03-04',
        'salary': 4321.87,
        'manager': true,
        'skills': {
            'Data': ['SQL', 'Oracle', 'MySQL'],
            'Dev': ['PHP', 'Full-stack', 'Python']
        }
    };
    console.log(cand3);

    // Renvoi message
    const nbMois = 13;
    console.info('Bonjour, je m\'appelle ' + cand3.fname + ', je touche ' + (cand3.salary * nbMois) + '€ par an et je suis compétent en ' + cand3.skills.Dev[0]);
}

/**
 * Structures
 */
function testStructures() {
    // While
    console.log('Boucle WHILE');
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++; // i = i + 1
    }

    // Do...While
    console.log('Boucle DO WHILE');
    let j = 1;
    do {
        console.log(j);
        j++;
    } while (j <= 10)

    // For
    console.log('Boucle FOR');
    for (let k = 1; k <= 10; k++) {
        console.log(k);
    }
}
