import * as THREE from 'three';
import {MTLLoader} from "three/addons/loaders/MTLLoader.js";
import {OBJLoader} from "three/addons/loaders/OBJLoader.js";

const pDescription = document.getElementById("descriptionText");

const ongletsTechno = document.querySelectorAll(".onglet_techno");

const text = ["Three.js est une bibliothèque JavaScript open source qui permet de créer et de visualiser des graphiques 3D dans un navigateur web. ",
                        "JavaScript est un langage de programmation polyvalent et dynamique utilisé principalement pour créer des applications web interactives. " +
                        "JavaScript est un langage de programmation de haut niveau principalement utilisé pour créer des fonctionnalités interactives sur les sites web. " +
                        "Il permet de manipuler le contenu HTML et CSS d'une page web, d'interagir avec l'utilisateur via des événements et des actions dynamiques, et de " +
                        "communiquer avec des serveurs pour récupérer ou envoyer des données.",
                        "HTML, abréviation de HyperText Markup Language (langage de balisage hypertexte), est le langage de balisage standard utilisé pour créer des pages web. " +
                        "Il fournit la structure et le contenu de base d'une page web en utilisant un ensemble de balises et d'attributs.",
                        "CSS, abréviation de Cascading Style Sheets (feuilles de style en cascade), est un langage de style utilisé pour définir l'apparence et la présentation des " +
                        "éléments HTML d'une page web. Il permet de contrôler les aspects visuels tels que la couleur, la police, la disposition, la taille et les animations des éléments " +
                        "sur une page. En utilisant des sélecteurs et des propriétés, CSS permet aux développeurs de créer des designs attrayants et cohérents pour leurs sites web, améliorant ainsi l'expérience utilisateur.",
                        "Vue.js est un framework JavaScript moderne et polyvalent, offrant une approche simple et intuitive pour le développement d'applications web réactives et performantes." +
                        " Son écosystème complet, sa flexibilité et sa facilité d'utilisation en font un choix populaire parmi les développeurs.",
                        "Android Studio est un environnement de développement intégré (IDE) officiellement pris en charge par Google pour le développement d'applications Android. " +
                        "Il offre une suite d'outils puissants pour la création, le débogage, le test et le déploiement d'applications Android." +
                        "Pour créer son application Android Studio nous propse de la developper soit en Kotlin soit en Java et pour la mise en page, il propose l'utilisation de XML.",
                        "Java est un langage de programmation polyvalent et orienté objet largement utilisé pour développer des applications logicielles, des applications mobiles, des jeux, " +
                        "des sites web et bien plus encore. Connu pour sa portabilité et sa robustesse, Java peut être exécuté sur diverses plates-formes grâce à la machine virtuelle Java (JVM). " +
                        "Il est apprécié pour sa sécurité, sa fiabilité, sa facilité d'utilisation et sa grande communauté de développeurs. Java est utilisé dans de nombreux domaines, notamment le " +
                        "développement d'applications d'entreprise, les applications Android, les applications web et les jeux.",
                        "Python est un langage de programmation interprété, polyvalent et convivial, connu pour sa simplicité syntaxique et sa lisibilité. Il est largement utilisé dans le développement web, " +
                        "l'analyse de données, l'intelligence artificielle, l'apprentissage automatique, l'automatisation des tâches et bien d'autres domaines. Python favorise la productivité des développeurs " +
                        "grâce à sa syntaxe concise et à ses nombreuses bibliothèques et frameworks. Il est apprécié pour sa facilité d'apprentissage, sa flexibilité, sa polyvalence et sa grande communauté de développeurs. " +
                        "Python est souvent utilisé pour prototyper rapidement des projets et développer des applications efficaces et évolutives."]

let linkMTL = "./assets/logo/threejs.mtl";
let linkOBJ = "./assets/logo/threejs.obj";

let sizeCamera = 5;

let indSelect = 0;

let description = text[0];

switch (indSelect){
    case 0:
        linkMTL = "./assets/logo/threejs.mtl";
        linkOBJ = "./assets/logo/threejs.obj";
        description = text[0];
        sizeCamera = 5;
        break;
    case 1:
        linkMTL = "./assets/logo/js.mtl";
        linkOBJ = "./assets/logo/js.obj";
        description = text[1];
        sizeCamera = 15;
        break;
    case 2:
        linkMTL = "./assets/logo/html.mtl";
        linkOBJ = "./assets/logo/html.obj";
        description = text[2];
        sizeCamera = 9;
        break;
    case 3:
        linkMTL = "./assets/logo/css.mtl";
        linkOBJ = "./assets/logo/css.obj";
        description = text[3];
        sizeCamera = 16;
        break;
    case 4:
        linkMTL = "./assets/logo/vuejs.mtl";
        linkOBJ = "./assets/logo/vuejs.obj";
        description = text[4];
        sizeCamera = 10;
        break;
    case 5:
        linkMTL = "./assets/logo/android.mtl";
        linkOBJ = "./assets/logo/android.obj";
        description = text[5];
        sizeCamera = 17;
        break;
    case 6:
        linkMTL = "./assets/logo/java.mtl";
        linkOBJ = "./assets/logo/java.obj";
        description = text[6];
        sizeCamera = 5;
        break;
    case 7:
        linkMTL = "./assets/logo/python.mtl";
        linkOBJ = "./assets/logo/python.obj";
        description = text[7];
        sizeCamera = 6;
        break;
    default :
        console.log("cette techno n'hexiste pas");
}

pDescription.innerText = description;

ongletsTechno.forEach(onglet =>{
    onglet.addEventListener("click", ()=>{
        ongletsTechno.forEach(ongl => {
            ongl.classList.remove("selected");
        })
        onglet.classList.add("selected");
        indSelect = parseInt(onglet.id);

        switch (indSelect){
            case 0:
                linkMTL = "./assets/logo/threejs.mtl";
                linkOBJ = "./assets/logo/threejs.obj";
                description = text[0];
                sizeCamera = 5;
                break;
            case 1:
                linkMTL = "./assets/logo/js.mtl";
                linkOBJ = "./assets/logo/js.obj";
                description = text[1];
                sizeCamera = 15;
                break;
            case 2:
                linkMTL = "./assets/logo/html.mtl";
                linkOBJ = "./assets/logo/html.obj";
                description = text[2];
                sizeCamera = 9;
                break;
            case 3:
                linkMTL = "./assets/logo/css.mtl";
                linkOBJ = "./assets/logo/css.obj";
                description = text[3];
                sizeCamera = 16;
                break;
            case 4:
                linkMTL = "./assets/logo/vuejs.mtl";
                linkOBJ = "./assets/logo/vuejs.obj";
                description = text[4];
                sizeCamera = 10;
                break;
            case 5:
                linkMTL = "./assets/logo/android.mtl";
                linkOBJ = "./assets/logo/android.obj";
                description = text[5];
                sizeCamera = 17;
                break;
            case 6:
                linkMTL = "./assets/logo/java.mtl";
                linkOBJ = "./assets/logo/java.obj";
                description = text[6];
                sizeCamera = 5;
                break;
            case 7:
                linkMTL = "./assets/logo/python.mtl";
                linkOBJ = "./assets/logo/python.obj";
                description = text[7];
                sizeCamera = 6;
                break;
            default :
                console.log("Cette techno n'existe pas");
        }

        pDescription.innerText = description;
        var mtlLoader = new MTLLoader();
        mtlLoader.load(linkMTL, function(materials)
        {
            materials.preload();
            var objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load(linkOBJ, function(object)
            {
                scene.remove(cube);
                cube = object;
                scene.add(cube);
            });
        });
        camera.position.setZ(sizeCamera);
    });
});

const canvas = document.querySelector('#cube');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(canvas.clientWidth, canvas.clientHeight);

camera.position.setZ(sizeCamera);

renderer.render(scene, camera);

//const controls = new OrbitControls(camera, renderer.domElement);

var cube;
var mtlLoader = new MTLLoader();
mtlLoader.load(linkMTL, function(materials)
{
    materials.preload();
    var objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load(linkOBJ, function(object)
    {
        cube = object;
        scene.add( cube )
    });
});
const pointLight = new THREE.PointLight(0xffffff, 40, 100);
pointLight.position.set(10, 10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

function animate() {
    //controls.update();
    requestAnimationFrame(animate);
    cube.rotation.y += 0.02;
    renderer.render(scene, camera);
}

animate();
