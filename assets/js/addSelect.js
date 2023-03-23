// Fonction pour ajouter un élément avec le texte sélectionné
function addSelectActor() {
    // Récupère l'élément select et sa valeur sélectionnée
    var select = document.getElementById("monSelectActor");
    var idActeur = select.options[select.selectedIndex].dataset.idActeur;
    var valeur = select.options[select.selectedIndex].value;
    var texte = select.options[select.selectedIndex].text;
  
    // Crée un nouvel élément div avec le texte sélectionné
    var nouvelElement = document.createElement("div");
    var nouveauTexte = document.createTextNode(texte);
    nouvelElement.appendChild(nouveauTexte);
  
    // Ajoute l'id-acteur au champ caché
    var inputIdActeur = document.createElement("input");
    inputIdActeur.type = "hidden";
    inputIdActeur.name = "idActeur[]";
    inputIdActeur.value = idActeur;
    nouvelElement.appendChild(inputIdActeur);

    // Ajoute le nouvel élément à la page
    var conteneur = document.getElementById("conteneurActor");

    conteneur.appendChild(nouvelElement);
    nouvelElement.classList.add("text-whitePrimary", "w-full", "uppercase", "text-center", "mb-1");
    nouvelElement.classList.add("testId");
    nouvelElement.classList.add("grid", "grid-cols-2", "items-center", "text-md");



    var boutonSupprimer = document.createElement("button");
    boutonSupprimer.innerHTML = " Supprimer";
    boutonSupprimer.onclick = function() {
        nouvelElement.remove();
};
    nouvelElement.appendChild(boutonSupprimer);
    boutonSupprimer.classList.add("bg-red-500", "text-md", "w-2/3");
    boutonSupprimer.classList.add("text-whitePrimary");
    boutonSupprimer.classList.add("rounded-2xl");
    boutonSupprimer.classList.add("px-2");


    // Ajoute le nouvel élément à la page
    var conteneur = document.getElementById("conteneur");
    conteneur.appendChild(nouvelElement);
}

// Fonction pour ajouter un élément avec le texte sélectionné
function addSelectReal() {
    // Récupère l'élément select et sa valeur sélectionnée
    var select = document.getElementById("monSelectReal");
    var idReal = select.options[select.selectedIndex].dataset.idReal;
    var valeur = select.options[select.selectedIndex].value;
    var texte = select.options[select.selectedIndex].text;
  
    // Crée un nouvel élément div avec le texte sélectionné
    var nouvelElement = document.createElement("div");
    var nouveauTexte = document.createTextNode(texte);
    nouvelElement.appendChild(nouveauTexte);
  
    // Ajoute l'id-acteur au champ caché
    var inputIdReal = document.createElement("input");
    inputIdReal.type= "hidden";
    inputIdReal.name = "idReal[]";
    inputIdReal.value = idReal;
    nouvelElement.appendChild(inputIdReal);

    // Ajoute le nouvel élément à la page
    var conteneur = document.getElementById("conteneurReal");
    conteneur.classList.add("grid", "grid-cols-2");

    conteneur.appendChild(nouvelElement);
    nouvelElement.classList.add("text-whitePrimary", "w-auto", "uppercase", "text-center", "mb-4", "leading-10");
    nouvelElement.classList.add("testId");



    var boutonSupprimer = document.createElement("button");
    boutonSupprimer.innerHTML = " Supprimer";
    boutonSupprimer.onclick = function() {
        nouvelElement.remove();
    };
    nouvelElement.appendChild(boutonSupprimer);
    boutonSupprimer.classList.add("bg-sand");
    boutonSupprimer.classList.add("text-whitePrimary");
    boutonSupprimer.classList.add("rounded-2xl");
    boutonSupprimer.classList.add("h-12");
    boutonSupprimer.classList.add("px-2");


    // Ajoute le nouvel élément à la page
    var conteneur = document.getElementById("conteneur");
    conteneur.appendChild(nouvelElement);
}
  