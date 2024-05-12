import Slide from "./entity/Slide.js";

const App = Vue.createApp({
    components: {
        Slide
    },
    template: `
      <h2> Projet réalisé dans le cadre du BUT :</h2>
      <section class="partProjet">
        <h3>Graph Map :</h3>
        <div class="divProjet">
            <p class="textSlide">Réalisé en java, ce projet à pour but d'aider à la décision pour un responsable de plus de 30 établissements,
            via une interface IHM. 
            Ce logiciel à pour but d'aider à connaitre les meilleurs chemins à enpreinter en fonction de la fiabilité, de la durée et de la distance 
            la plus courte.</p>
              <Slide
                  img1="./img/Graph/Principale.png"
                  img2="./img/Graph/chargement.png"
                  img3="./img/Graph/fonctionnalité.png"
              />
        </div>
        <h3>VroumVoum :</h3>
        <div class="divProjet">
              <Slide
                  img1="./img/vroumvroum/principale.png"
                  img2="./img/vroumvroum/jeu.png"
                  img3="./img/vroumvroum/creationCircuit.png"
              />
          <p class="textSlide">Ce projet est un site web, réalisé en HTML, JavaScript, CSS. Ce projet est un jeu de course de voiture dans lequel,
          nous pouvons jouer à des circuits, créer des circuits et enfin grâce à la monnaie mise en place, les VroumCoins, nous pouvons personnaliser nos karts.</p>
        </div>
        <h3>Gogo Itinero :</h3>
        <img id="logo" src="./img/gogoItinero/logo.png" alt="logo application gogoItinero">
        <div class="divProjet">
          <p class="textSlide">Ce projet est une application android, réalisée à l'aide de android Studio. Grâce à cette application nous pouvons prévisualiser des itinéraires,
            que nous pouvons enregister en favoris. nous pouvons également créer un compte à l'aide de firebase pour pouvoir garder nos itinéraires si nous changeons d'appareil.
            Enfin, quelque parametre on été mis en place comme le changement de mode (sombre/clair) mais aussi la sauvegarde ou non l'historique et enfin la desactivation de la musique de début.</p>
          <Slide
              img1="./img/gogoItinero/carte.png"
              img2="./img/gogoItinero/historique.png"
              img3="./img/gogoItinero/itineraire.png"
          />
        </div>
      </section>
      <h2>Projet personnel :</h2>
      <h3>Loto :</h3>
      <div class="divProjet">
          
          <p class="textSlide">Réalisé en JavaScript, HTML et CSS, ce projet a été réalisé pour aider à l'organisation et au bon déroulement d'un loto. 
          Deux mode de jeux son proposé, le premier en mode automatique, c'est-à-dire que le tirage des nombres est fait automatiquement par la machine et le deuxième mode est quand à lui manuel, 
          c'est-à-dire qu'il doit y avoir une personne à côté de la machine qui avec un boulier par exemple fait le tirage des nombres et ensuite selectionne sur le site. 
          Au moment de jouer, l'organisateur peux egalemtn choisir la composition de ça partie en fonction de son réglement. Enfin nous retrouvons sur la page de jeux un leaderBoard à droite qui affiche 
          le dernier nombre tiré et celui d'avant.</p>
          <Slide
              img1="./img/Loto/PrincipaleLoto.png"
              img2="./img/Loto/ModeJeuLoto.png"
              img3="./img/Loto/JeuLoto.png"
          />
      </div>
    `
});

App.mount("#myApp");