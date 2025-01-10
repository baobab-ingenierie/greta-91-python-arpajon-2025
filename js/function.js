/**
 * Routine qui ajoute une alerte au document HTML en
 * utilisant le DOM
 */
function makeAlert(sMsg) {
    // Variables objet
    let oDiv, oStrong, oButton;

    oDiv = document.createElement('div');
    oDiv.setAttribute('class', 'alert alert-info alert-dismissible fade show');
    oDiv.textContent=sMsg;

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