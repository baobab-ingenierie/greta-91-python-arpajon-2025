/**
 * Génère des Cards à partir d'un tableau d'objets
 */
function generateCards() {
    // Liste des membres de l'équipe
    let team = [
        { 'fname': 'M\'Paly', 'gender': 'M', 'desc': 'Systèmes et réseaux' },
        { 'fname': 'Arnaud', 'gender': 'M', 'desc': 'Consultant en Cybersécurité' },
        { 'fname': 'Jarfar', 'gender': 'M', 'desc': 'Développeur en IA et fournisseur de chouquettes' },
        { 'fname': 'Danis', 'gender': 'M', 'desc': 'Pourrait faire l\'orientation à Koh-Lanta' },
        { 'fname': 'Dan', 'gender': 'F', 'desc': 'Sportive de combat émérite et polyglotte' },
        { 'fname': 'Mohamed', 'gender': 'M', 'desc': 'Développeur fullstack' },
        { 'fname': 'Lucas', 'gender': 'M', 'desc': 'Perspicace et généreux avec ses camarades' },
        { 'fname': 'Aurélien', 'gender': 'M', 'desc': 'Fournisseur officiel du café et codeur confirmé' },
        { 'fname': 'Robert', 'gender': 'M', 'desc': 'Fidèle participant chez les GRETA' },
        { 'fname': 'Sarah', 'gender': 'f', 'desc': 'Brille par son absence' }
    ];
    let teamTag = document.querySelector('#team');
    let codeHtml = teamTag.innerHTML;
    let photo = '';

    // Insère autant de Cards que de membres dans Team
    for (let i = 0; i < team.length; i++) {
        // Teste genre du membre de l'équipe
        if (team[i].gender.toUpperCase() === 'F') {
            photo = 'female.jpg'
        } else {
            photo = 'male.jpg'
        }

        // Ou avec un opérateur ternaire
        photo = (team[i].gender.toUpperCase() === 'F') ? 'female.jpg' : 'male.jpg'; // Plus compact !

        // Injecte le code HTML pour le membre en cours
        codeHtml += '<div class="card my-3" style="width: 18rem;"><img src="pics/' + photo + '" class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">' + team[i].fname + '</h5><p class="card-text">' + team[i].desc + '</p><a href="#" class="btn btn-primary">Profil Marvel</a></div></div>';
    }

    // Réinjecte le code HTML final dans la section
    teamTag.innerHTML = codeHtml;
}

// Appelle la finction
generateCards();