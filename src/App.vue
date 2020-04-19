<template>
  <div class="font-sans">
    <div class="text-center align-middle shadow-xl fixed w-screen h-8 bg-white">
      <h1>Le Grand Tournoi de l'After Foot</h1>
    </div>
    <div class="container mx-auto pt-10 px-2">
      <h2>Tableau</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <RoundComponent
          v-for="(round, index) in rounds"
          :round="round"
          :key="index"
        >
        </RoundComponent>
      </div>

      <hr />

      <h2>Déroulé de la compétition :</h2>
      <SummaryComponent
        v-for="(match, index) in matchesByDate"
        :key="index"
        :match="match"
      ></SummaryComponent>

      <hr />

      <footer class="mt-2">
        <h2>Explication :</h2>
        Le Grand Tournoi est un format inédit du traditionnel quizz de l'After
        Foot (animé par Julien Cazarre) sous forme de tableau de duels à
        élimination directe, commençant en 1/8e de finales. Il est instauré en
        2020 suite au confinement national français dû à l'épidémie de Covid-19
        en France|Covid-19. Les deux aspects du format du Grand Tournoi sont
        justifiés ainsi : * La composition des participants (soit par équipes,
        soit un grand chacun-pour-soi) est abandonnée au profit de duels,
        limitant ainsi les chances de propagation du virus. * L'organisation
        (précédemment sous la forme de journées, typique d'un championnat) est
        abandonnée au profit d'un tableau à élimination directe. Cette mesure
        est adoptée pour raccourcir la saison et la terminer à tout prix, les
        pertes des droits TV et des contrats de sponsoring pouvant mettre en
        danger la santé financière des participants. Le tournoi verra
        s'affronter les 8 participants habituels classés selon leur rang à la
        Race au moment du début du Grand Tournoi, ainsi que 8 invités plus ou
        moins prestigieux, assignés de manière aléatoire. Chaque match se joue
        en 10 minutes.
      </footer>
    </div>
  </div>
</template>

<script>
import RoundComponent from "./components/RoundComponent";
import { Match, Player, Round, Side } from "./types";
import SummaryComponent from "./components/SummaryComponent";

export default {
  name: "App",
  components: {
    SummaryComponent,
    RoundComponent
  },
  data() {
    return {
      players: {
        gbr: new Player("Gilbert Brisbois", 1),
        max: new Player("Max du standard", null),
        edm: new Player("Éric Di Meco", null),
        kdi: new Player("Kévin Diaz", 8),
        dpe: new Player("Damien Perrinelle", 5),
        jth: new Player("Jérôme Thomas", null),
        pdu: new Player("Pierre Ducrocq", null),
        jmh: new Player("Jonathan MacHardy", 4),
        jro: new Player("Jérôme Rothen", 3),
        aro: new Player("Arthur Robert", null),
        fpi: new Player("Frédéric Piquionne", null),
        llp: new Player("Laure Lepailleur", 6),
        nja: new Player("Nicolas Jamain", 7),
        lch: new Player("Lionel Charbonnier", null),
        pve: new Player("Paul Vexiau", null),
        dri: new Player("Daniel Riolo", 2)
      }
    };
  },
  computed: {
    matches() {
      return [
        new Match(
          16,
          1,
          new Date(2020, 3, 7),
          new Side(this.players.gbr, 6),
          new Side(this.players.max, 5),
          "A priori l'une des affiches les plus déséquilibrée, le match démarre par un 2-0 du favori Gilbert Brisbois. Max revient à 2-1, mais la technique et l'experience de Gilbert vont porter le score à 4-1. Une certaine fébrilité s'empare de ce dernier lorsque Max marque son 2e but, et, sentant que le vent commence à tourner, il profitera non pas d'une mais de 2 erreurs de Gilbert pour revenir à 4 partout. Pris de panique, Gilbert répond à une question dans la règle mais pas dans l'esprit, profitant d'une faille du règlement en énumérant rapidement des réponses dans l'espoir de tomber juste par hasard, suscitant les huées du public. L'arbitre accorde le but mais prévient la tête de série que ce comportement ne sera plus toléré (appelée plus tard la jurisprudence Hénin-Beaumont). Gilbert retrouve un peu son jeu et passe la marque à 6-4, mais la rage de l'injustice donne la force à Max de réduire à nouveau l'écart. Sentant la fin du temps règlemtaire arriver, Gilbert met une énorme pression sur l'arbitre et perd du temps, ce qui fonctionnera puisque ce dernier arrêtera le match à 6-5 alors qu'une dernière action aurait pu être jouée. Max, dont on n'attendait rien, sort dès le premier tour mais par la grande porte, vainqueur moral de ce match d'ouverture. Gilbert, déjà accusé régulièrement d'être favorisé par le corps arbitral, ne redorera pas son image."
        ),
        new Match(
          16,
          2,
          new Date(2020, 3, 9),
          new Side(this.players.edm, 4),
          new Side(this.players.kdi, 7),
          "Première grosse affiche de ces huitièmes de finale. D'un côté, Kèvin Diaz, huitième de la Race mais considéré par beaucoup d'observateurs comme ayant un niveau supérieur à son classement. De l'autre, Éric Di Meco, invité, mais premier d'une autre championnat, considéré par beaucoup d'observateurs comme une potentielle tête de série 1 bis. Mais, la vie nous réserve parfois des surprises, comme disait Brandao c'est comme la boîte à chocolat. En effet, le scénario de ce huitième touche du doigt l'irrationnalité pure. Kévin ouvre la marque, et Éric enchaîne sur un but contre son camp, 2-0. Certains disent que le visage de ce dernier au coup d'envoi n'annoncait rien de bon. On ne le saura jamais, mais ce dont on est sûr c'est que c'est ce moment là qu'il choisit pour perdre son football. Cauchemar devenu réalité, les minutes qui suivirent verront Kévin porter la marque à 7-0, dont un second CSC. Le monde entier est en état de stupeur, le match est plié. Mais, tout va très vite dans le football, et le haut niveau se joue souvent dans les têtes. À peine son premier but marqué pour revenir à 7-1, Éric se transforma en monstre d'efficacité et de précision et enchaîna 3 autres buts, 7-4 au tableau d'affichage. Malheureusement le réveil fut trop tardif, et c'est bien Kévin qui se qualifia, plutôt soulagé que le temps réglementaire arrive à son terme."
        ),
        new Match(
          16,
          3,
          new Date(2020, 3, 15),
          new Side(this.players.dpe, 8),
          new Side(this.players.jth, 7),
          "Résumé à venir."
        ),
        new Match(
          16,
          4,
          new Date(2020, 3, 8),
          new Side(this.players.pdu, 4),
          new Side(this.players.jmh, 8),
          "Ce match fut marqué par l'une des pires premières périodes des huitièmes de finale, les 2 protagonistes ratant pratiquement toutes leurs occasions. Lors de la seconde, le niveau de jeu redevint acceptable, le favori Jonathan assumant son statut et dominant logiquement la rencontre. Un peu amer, Pierre eu quelques mots en fin de match, accusant son adversaire de tricherie, mais l'on vit bien qu'il n'en était pas lui-même convaincu. Victoire logique 8-4 de la tête de série numéro 4."
        ),
        new Match(
          16,
          5,
          new Date(2020, 3, 16),
          new Side(this.players.jro, 11),
          new Side(this.players.aro, 4),
          "Ce huitième est marqué par le forfait de [[Nicolas Vilas]], remplacé au pied levé par Arthur Robert. Ce forfait est un coup dur pour les organisateurs du Grand Tournoi, l'affiche faisant normalement s'affronter l'un des invités les plus forts avec la tête de série numéro 3. Le match fut décevant, la différence de niveau entre les protagonistes étant trop élevée. Qualification facile pour la patte gauche 11-4."
        ),
        new Match(
          16,
          6,
          new Date(2020, 3, 14),
          new Side(this.players.fpi, 7),
          new Side(this.players.llp, 9),
          "Résumé à venir."
        ),
        new Match(
          16,
          7,
          new Date(2020, 3, 10),
          new Side(this.players.nja, 10),
          new Side(this.players.lch, 2),
          "Résumé à venir."
        ),
        new Match(
          16,
          8,
          new Date(2020, 3, 13),
          new Side(this.players.pve, 3),
          new Side(this.players.dri, 9),
          "Résumé à venir."
        ),
        new Match(
          8,
          1,
          "",
          new Side(this.players.gbr, null),
          new Side(this.players.kdi, null),
          ""
        ),
        new Match(
          8,
          2,
          "",
          new Side(this.players.dpe, null),
          new Side(this.players.jmh, null),
          ""
        ),
        new Match(
          8,
          3,
          "",
          new Side(this.players.jro, null),
          new Side(this.players.llp, null),
          ""
        ),
        new Match(
          8,
          4,
          "",
          new Side(this.players.nja, null),
          new Side(this.players.dri, null),
          ""
        )
      ];
    },
    rounds() {
      return [
        new Round(
          "Huitièmes",
          this.sortMatchesByOrder(
            this.matches.filter(match => match.round === 16)
          )
        ),
        new Round(
          "Quarts",
          this.sortMatchesByOrder(
            this.matches.filter(match => match.round === 8)
          )
        )
      ];
    },
    matchesByDate() {
      return this.matches
        .filter(match => match.summary && match.date)
        .slice()
        .sort((matchA, matchB) => matchA.date - matchB.date);
    }
  },
  methods: {
    sortMatchesByOrder(matches) {
      return matches
        .slice()
        .sort((matchA, matchB) => matchA.order - matchB.order);
    }
  }
};
</script>
