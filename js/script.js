const buton = document.getElementById('lienBouton');
const titre = document.getElementById('titre');
const nom = document.getElementById('nom');
const timelineStatusItems = document.querySelectorAll('.timeline-status');
const timelineObjects = document.querySelectorAll('.timeline_object');
const detailCompetence = document.querySelector('.detailCompétence');

const textTitre = 'PORTFOLIO';
const textNom = 'Camille Morfin';

const tailleTitre = textTitre.length;
const tailleNom = textNom.length;

const tailleTotal = tailleTitre + tailleNom;

let ind = 0;
// animation lors de l'ouverture de la page
let time = 350;

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(ecrire, 500);
});

function ecrire(){
    ind++;
    //let curseurvisible = ind % 2 === 0;

    if (ind<=tailleTitre) {
        titre.innerText = textTitre.substr(0, ind) + '|';
    }else{
        if(ind === tailleTitre + 1){
            titre.innerText = textTitre;
        }
        if(ind < tailleTotal){
            nom.innerText = textNom.substr(0, ind-tailleTitre) + '|' ;
        }else{
            nom.innerText = textNom;
        }

        time = 150;
    }

    if(ind<tailleTotal){
        setTimeout(function (){
            ecrire()
        }, Math.random() * time);
    }
}

// animation lors du clique sur le boutton
buton.addEventListener('click',function (e){
    // animation pour defiler d'un élément à un autre
    e.preventDefault();
    const targetElement = document.getElementById(this.getAttribute('href').substring(1));

    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    })

    // affichage du menu après avoir cliqué sur le bouton
    const menu = document.getElementById('menu');
    menu.style.display = 'flex';
})

document.addEventListener('DOMContentLoaded', function() {
    const premiereCompetence = timelineObjects[0];
    premiereCompetence.click();
});

// Modifier la compétence selectionnée

// le contenu de detailCompétence
timelineObjects.forEach((timelineObject, index) => {
    timelineObject.addEventListener('click', () => {
        const numeroCompetence = index + 1;
        const titreCompetence = timelineObject.querySelector('.timeline_content span').textContent;

        const titre = document.createElement('h2');
        const paragraphe = document.createElement('div');

        titre.textContent = `Compétence n°${numeroCompetence}: ${titreCompetence}`;
        switch (numeroCompetence){
            case 1:
                paragraphe.innerHTML = paragraphe.innerHTML = "<p>La compétence Réaliser correspond à concevoir, coder, tester et intégrer une solution informatique pour un client.</p>" +
                    "<p>J'estime avoir acquis au minimum un niveau 2 dans cette compétence, qui correspond à réaliser une application complète à partir" +
                    "d'exigences définies précédemment.</p>" +
                    "<p>Pour mettre en œuvre cette compétence, j'ai réalisé deux SAÉ principales : </p>" +
                    "<ul><li>SAÉ du semestre 2 : <br>" +
                    "j'ai réalisé une SAÉ intitulée <a href='#graphMap' class='linkText'>Développement d'une application</a>. Nous devions réaliser une application <a href='#technoUtilisee' class='linkText'>Java</a> d'aide à la décision " +
                    "afin de choisir le chemin le plus court, le plus fiable et le plus rapide parmi plusieurs possibilités.<br>" +
                    "Pour réaliser cette SAÉ, nous nous sommes appuyés sur les ressources :" +
                    "<ul><li>R2.01 Développement orienté objets</li>" +
                    "<li>R2.02 Développement d'application avec IHM</li>" +
                    "<li>R2.03 Qualité de développement</li>" +
                    "<li>R2.07 Graphes</li>" +
                    "<li>R2.08 Outils numériques pour les statistiques descriptives</li>" +
                    "<li>R2.10 Introduction à la gestion des systèmes d'information</li></ul>" +
                    "</li>" +
                    "<li>SAÉ des semestres 3 et 4 :<br> " +
                    "j'ai réalisé un <a href='#vroumvroum' class='linkText'>jeu de voiture</a> avec la possibilité de créer des circuits, de jouer à ces circuits et enfin de personnaliser sa voiture." +
                    "Cette SAÉ a été réalisée en <a href='#technoUtilisee' class='linkText'>HTML</a>, <a href='#technoUtilisee' class='linkText'>CSS</a> et <a href='#technoUtilisee' class='linkText'>JavaScript</a>. Nous avons également déployé cette application web au semestre 4." +
                    "<ul><li>R3.01 Développement web</li>" +
                    "<li>R3.03 Analyse</li>" +
                    "<li>R3.04 Qualité de développement</li>" +
                    "<li>R3.10 Management des systèmes d'information</li></ul></li></ul>" +
                    "<p>Les traces significatives montrant l'acquisition de cette compétence sont les suivantes :<br>" +
                    "pour la SAÉ du semestre 2, j'ai obtenu le résultat de 11.68/20 et pour la SAÉ des semestres 3 et 4, j'ai obtenu 17.60/20 au semestre 3 et" +
                    "15.96/20.<br>" +
                    "Je peux également dire que les missions confiées pendant <a href='#stage' class='linkText'>mon stage</a>, à savoir faire évoluer un site initialement en Symfony vers Rust, " +
                    "m'ont permis de développer cette compétence.</p>";
                break;
            case 2:
                paragraphe.innerHTML = "<p>La compétence Optimiser consiste à proposer des applications informatiques optimisées en fonction de critères spécifiques." +
                    "C'est-à-dire le temps d'exécution, la précision, la consommation de ressources, etc.</p>" +
                    "<p>J'estime avoir acquis au minimum un niveau 2 dans cette compétence, qui correspond à sélectionner les algorithmes adéquats pour" +
                    "répondre à un problème donné.</p>" +
                    "<p>Pour mettre en œuvre cette compétence, j'ai réalisé entre autres une SAÉ : </p>" +
                    "<ul><li>SAÉ du semestre 1 : <br>" +
                    "j'ai réalisé une SAÉ intitulée <strong>Comparaison d'approches algorithmiques</strong>. Dans celle-ci, nous devions comparer des algorithmes et écrire un nouvel algorithme.<br>" +
                    "Pour réaliser cette SAÉ, nous nous sommes en majorité appuyés sur la ressource :" +
                    "<ul><li>R1.01 Initiation au développement</li></ul>" +
                    "</li></li></ul>" +
                    "<p>Les traces significatives montrant l'acquisition de cette compétence sont les suivantes :<br>" +
                    "J'ai obtenu pour la SAÉ du semestre 1, le résultat de 17/20.<br>" +
                    "Je peux également dire que les missions confiées pendant <a href='#stage' class='linkText'>mon stage</a>, à savoir faire évoluer un site initialement en Symfony vers Rust, " +
                    "m'ont permis de développer cette compétence.</p>";
                break;
            case 3:
                paragraphe.innerHTML = "<p>La compétence Administrer correspond à installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures," +
                    "des services et des réseaux, et optimiser le système informatique d'une organisation.</p>" +
                    "<p>J'estime avoir acquis au minimum un niveau 2 dans cette compétence, qui correspond à réaliser une application complète à partir" +
                    "d'exigences définies précédemment.</p>" +
                    "<p>Pour mettre en œuvre cette compétence, j'ai réalisé deux principales SAÉ : </p>" +
                    "<ul><li>SAÉ du semestre 2 : <br>" +
                    "j'ai réalisé une SAÉ intitulée <strong>Installation de services réseau</strong>. Dans celle-ci, nous devions réaliser une installation réseau afin de pouvoir déployer des sites.<br>" +
                    "Pour réaliser cette SAÉ, nous nous sommes appuyés sur les ressources :" +
                    "<ul><li>R2.01 Développement orienté objets</li>" +
                    "<li>R2.04 Communication et fonctionnement bas niveau</li>" +
                    "<li>R2.05 Introduction aux services réseaux</li></ul>" +
                    "</li>" +
                    "<li>SAÉ du semestre 4 :<br> " +
                    "j'ai réalisé un <a href='#vroumvroum' class='linkText'>jeu de voiture</a> avec la possibilité de créer des circuits, de jouer à ces circuits et enfin de personnaliser sa voiture." +
                    "Cette SAÉ a été réalisée en <a href='#technoUtilisee' class='linkText'>HTML</a>, <a href='#technoUtilisee' class='linkText'>CSS</a> et <a href='#technoUtilisee' class='linkText'>JavaScript</a>. Nous avons également déployé cette application web au semestre 4.</li></ul>" +
                    "<p>Les traces significatives montrant l'acquisition de cette compétence sont les suivantes :<br>" +
                    "pour la SAÉ du semestre 2, j'ai obtenu le résultat de 12.50/20 et pour la SAÉ du semestre 4, j'ai obtenu 15.96/20.</p>";
                break;
            case 4:
                paragraphe.innerHTML = "<p>La compétence Gérer correspond à concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre" +
                    "à disposition toutes les informations pour un bon pilotage de l'entreprise.</p>" +
                    "<p>J'estime avoir acquis au minimum un niveau 1 dans cette compétence, qui correspond à concevoir et mettre en place une base de données " +
                    "à partir d'un cahier des charges client.</p>" +
                    "<p>Pour mettre en œuvre cette compétence, j'ai réalisé deux principales SAÉ : </p>" +
                    "<ul><li>SAÉ du semestre 1 : <br>" +
                    "j'ai réalisé une SAÉ intitulée <strong>Création d'une base de données</strong>. Nous devions créer une base de données pour une fleuriste.<br>" +
                    "Pour réaliser cette SAÉ, nous nous sommes appuyés sur la ressource :" +
                    "<ul><li>R1.05 Introduction aux bases de données et SQL</li></ul>" +
                    "</li>" +
                    "<li>SAÉ du semestre 2 :<br> " +
                    "j'ai réalisé une SAÉ intitulée <strong>Exploitation d'une base de données</strong>. Nous devions, à l'aide de Power BI, analyser des données extraites d'une base de données.<br>" +
                    "Pour réaliser cette SAÉ, nous nous sommes appuyés sur la ressource :" +
                    "<ul><li>R2.06 Exploitation d'une base de données</li></ul></li></ul>" +
                    "<p>Les traces significatives montrant l'acquisition de cette compétence sont les suivantes :<br>" +
                    "pour la SAÉ du semestre 1, j'ai obtenu le résultat de 11.50/20 et pour la SAÉ du semestre 2, j'ai obtenu 15/20.<br>" +
                    "Je peux également dire que certaines missions confiées durant <a href='#stage' class='linkText'>mon stage</a>, comme lorsque j'ai aidé mon maître de stage à rendre utilisable la base de données ou encore" +
                    "écrire certaines fonctions en Rust permettant d'interagir avec la base de données, m'ont permis de développer cette compétence.</p>";
                break;
            case 5:
                paragraphe.innerHTML = "<p>La compétence Conduire correspond à satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et " +
                    "piloter un projet informatique avec des méthodes classiques ou agiles.</p>" +
                    "<p>J'estime avoir acquis au minimum un niveau 2 dans cette compétence, qui correspond à réaliser une application complète à partir" +
                    "d'exigences définies précédemment.</p>" +
                    "<p>Pour mettre en œuvre cette compétence, j'ai réalisé deux principales SAÉ : </p>" +
                    "<ul><li>SAÉ du semestre 1 : <br>" +
                    "j'ai réalisé une SAÉ intitulée <strong>Recueil des besoins</strong>. Nous devions dans un premier temps réaliser une petite enquête, puis développer " +
                    "un site web en prenant en compte les résultats de l'enquête.<br>" +
                    "Pour réaliser cette SAÉ, nous nous sommes appuyés sur les ressources suivantes :" +
                    "<ul><li>R1.02 Développement d'interfaces web</li>" +
                    "<li>R1.11 Bases de la communication</li></ul>" +
                    "</li>" +
                    "<li>SAÉ du semestre 3 :<br> " +
                    "j'ai réalisé une SAÉ intitulée <a href='#vroumvroum' class='linkText'>Développement d'application</a>. Nous avons réalisé un jeu de voiture avec la possibilité de créer des circuits, de jouer à ces circuits et enfin de personnaliser sa voiture." +
                    "Cette SAÉ a été réalisée en <a href='#technoUtilisee' class='linkText'>HTML</a>, <a href='#technoUtilisee' class='linkText'>CSS</a> et <a href='#technoUtilisee' class='linkText'>JavaScript</a>. Nous avons également utilisé des outils de gestion afin d'organiser au mieux la réalisation de celle-ci, comme Trello." +
                    "Pour réaliser cette SAÉ, nous nous sommes appuyés en majorité sur les ressources suivantes :" +
                    "<ul><li>R3.03 Analyse</li>" +
                    "<li>R3.04 Qualité de développement</li>" +
                    "<li>R3.10 Management des systèmes d'information</li></ul></li></ul>" +
                    "<p>Les traces significatives montrant l'acquisition de cette compétence sont les suivantes :<br>" +
                    "pour la SAÉ du semestre 1, j'ai obtenu le résultat de 14.65/20 et pour la SAÉ du semestre 3, j'ai obtenu 17.60/20.<br>" +
                    "Je peux également dire que durant <a href='#stage' class='linkText'>mon stage</a>, j'ai pu réaliser un suivi de projet en priorisant les tâches essentielles au fonctionnement du site.</p>";
                break;
            case 6:
                paragraphe.innerHTML = "<p>La compétence Collaborer correspond à acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement" +
                    "dans une équipe informatique.</p>" +
                    "<p>J'estime avoir acquis au minimum un niveau 2 dans cette compétence, qui correspond à situer son rôle et ses missions au sein d'une équipe informatique.</p>" +
                    "<p>Pour mettre en œuvre cette compétence, j'ai réalisé trois principales SAÉ : </p>" +
                    "<ul><li>SAÉ du semestre 1 : <br>" +
                    "j'ai réalisé une SAÉ intitulée Découverte de l'environnement économique et écologique. Durant celle-ci, nous devions rédiger un rapport sur une entreprise et " +
                    "décrire son environnement économique et écologique.<br>" +
                    "Pour réaliser cette SAÉ, nous nous sommes appuyés en majorité sur la ressource suivante :" +
                    "<ul><li>R1.09 Introduction à l'économie durable et numérique</li></ul>" +
                    "</li>" +
                    "<li>SAÉ du semestre 2 :<br> " +
                    "j'ai réalisé une SAÉ intitulée <strong>Organisation d'un travail d'équipe</strong>. Durant celle-ci, nous devions réaliser un poster afin d'informer les personnes sur un thème en rapport avec l'informatique.<br>" +
                    "Pour réaliser cette SAÉ, nous nous sommes appuyés en majorité sur la ressource suivante :" +
                    "<ul><li>R2.13 Communication technique</li></ul></li>" +
                    "<li>SAÉ des semestres 3 et 4 :<br>" +
                    "j'ai réalisé une SAÉ intitulée <a href='#vroumvroum' class='linkText'>Développement d'application</a>. Nous avons réalisé un jeu de voiture avec la possibilité de créer des circuits, de jouer à ces circuits et enfin de personnaliser sa voiture." +
                    "Cette SAÉ a été réalisée en HTML, CSS et JavaScript. Afin de collaborer au mieux, nous avons mis en place un salon Discord pour pouvoir discuter et un Trello pour indiquer les tâches en cours aux autres." +
                    "Pour réaliser cette SAÉ, nous nous sommes appuyés en majorité sur la ressource suivante :" +
                    "<ul><li>R3.10 Management des systèmes d'information</li></ul>" +
                    "<p>Les traces significatives montrant l'acquisition de cette compétence sont les suivantes :<br>" +
                    "pour la SAÉ du semestre 1, j'ai obtenu le résultat de 13.75/20, pour la SAÉ du semestre 2 j'ai obtenu 14/20 et pour la SAÉ des semestres 3 et 4, j'ai obtenu 17.60/20 au semestre 3 et" +
                    "15.96/20.<br>" +
                    "Je peux également dire que j'ai appris à collaborer durant <a href='#stage' class='linkText'>mon stage</a> car, même si je travaillais beaucoup seul, plusieurs fois, on travaillait à deux sur le projet (mon maître de stage et moi).</p>";
                break;
            default:
                console.log("Cette compétence n'héxiste pas !")
                break;
        }
        detailCompetence.innerHTML = '';
        detailCompetence.appendChild(titre);
        detailCompetence.appendChild(paragraphe);
    });
});

// les ronds
timelineStatusItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
        } else {
            timelineStatusItems.forEach(otherItem => {
                otherItem.classList.remove('selected');
            });
            item.classList.add('selected');
        }
        detailCompetence.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});