<template>
  <div class="font-sans text-gray-700">
    <div class="text-center align-middle shadow-lg fixed w-screen bg-white py-1">
      <h1 class="text-xl md:text-2xl xl:text-3xl font-bold">
        Le Grand Tournoi de l'After Foot
      </h1>
    </div>
    <div class="container mx-auto px-2 md:pt-2 xl:pt-4">
      <PageSectionComponent title="Tableau">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <RoundComponent v-for="(round, index) in rounds" :round="round" :key="index"> </RoundComponent>
        </div>
      </PageSectionComponent>

      <PageSectionComponent title="Déroulé de la compétition">
        <div class="grid grid-cols-1 gap-6">
          <SummaryComponent v-for="(match, index) in matchesByDate" :key="index" :match="match"></SummaryComponent>
        </div>
      </PageSectionComponent>

      <PageSectionComponent title="Contexte">
        <div class="p-2 border border-solid shadow-md">
          <p class="my-2">
            Le Grand Tournoi est un format inédit du traditionnel quizz de l'<a href="https://fr.wikipedia.org/wiki/After_Foot" target="_blank">After Foot</a> (animé par
            <a href="https://fr.wikipedia.org/wiki/Julien_Cazarre" target="_blank">Julien Cazarre</a>) sous forme de tableau à élimination directe, commençant en 1/8e de
            finales. Il est instauré en 2020 suite au confinement national français dû à l'épidémie de Covid-19.
          </p>
          <p class="mb-2">
            L'adoption de ce format à élimination est justifiée par le besoin de raccourcir la saison et la terminer à tout prix, les pertes des droits TV et des contrats
            de sponsoring pouvant mettre en danger la santé financière des participants.
          </p>
          <p>
            Le tournoi verra s'affronter 8 équipes habituelles du quizz, classées selon leur position dans le championnat au moment du début du Grand Tournoi, ainsi que 8
            équipes invitées plus ou moins prestigieuses, assignées de manière aléatoire. Chaque match se joue en 10 minutes.
          </p>
        </div>
      </PageSectionComponent>
    </div>
  </div>
</template>

<script>
import RoundComponent from "./components/RoundComponent";
import { Match, Team, Round, Side } from "./types";
import SummaryComponent from "./components/SummaryComponent";
import PageSectionComponent from "./components/PageSectionComponent";

export default {
  name: "App",
  components: {
    PageSectionComponent,
    SummaryComponent,
    RoundComponent
  },
  data() {
    return {
      teams: {
        gbr: new Team("RC Strasbrisbois", "Racing", 1),
        max: new Team("Royal Standard de Max", "Standard", null),
        edm: new Team("Olympique Di Meco", "OM", null),
        kdi: new Team("Ajax Diazterdam", "Ajax", 8),
        dpe: new Team("Perry Ned Bulls", "Ned Bulls", 5),
        jth: new Team("Jérôme", "Thomas", null),
        pdu: new Team("Pierre", "Ducrocq", null),
        jmh: new Team("Jonathandan Godot FC", "Godot FC", 4),
        jro: new Team("Paris Saint-Jérôme", "PSJ", 3),
        aro: new Team("Arthur", "Robert", null),
        fpi: new Team("Frédéric", "Piquionne", null),
        llp: new Team("Laure", "Lepailleur", 6),
        nja: new Team("Nicolas", "Jamain", 7),
        lch: new Team("Inter Charbonara FC", "Inter", null),
        pve: new Team("Paul", "Vexiau", null),
        dri: new Team("AS Rioloma", "Rioloma", 2)
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
          new Side(this.teams.gbr, 6),
          new Side(this.teams.max, 5),
          "A priori l'une des affiches les plus déséquilibrée, le match démarre par un 2-0 du favori, le RC Strasbrisbois. Le Standard revient à 2-1, mais la technique et l'experience des strasbrisbois vont porter le score à 4-1." +
            " Une certaine fébrilité s'empare de ces derniers lorsque l'outsider marque son 2e but, et, sentant que le vent commence à tourner, ils profiteront non pas d'une mais de 2 erreurs du Racing pour revenir à 4 partout." +
            " Pris de panique, le RC Strasbrisbois répond à une question dans la règle mais pas dans l'esprit, profitant d'une faille du règlement en énumérant rapidement des réponses dans l'espoir de tomber juste par hasard," +
            " suscitant les huées du public. L'arbitre accorde le but mais prévient la tête de série que ce comportement ne sera plus toléré (appelée plus tard la jurisprudence Hénin-Beaumont)." +
            " Retrouvant un peu son jeu, il passe la marque à 6-4, mais la rage de l'injustice donne la force au Standard de réduire à nouveau l'écart. Sentant la fin du temps règlemtaire arriver," +
            " les strasbrisbois mettent une énorme pression sur l'arbitre et perdent du temps, ce qui fonctionnera puisque ce dernier arrêtera le match à 6-5 alors qu'une dernière action aurait pu être jouée." +
            " Le Standard, dont on n'attendait rien, sort dès le premier tour mais comme un roi, vainqueur moral de ce match d'ouverture. Le Racing, déjà accusé régulièrement d'être favorisé par le corps arbitral, ne redorera pas son image."
        ),
        new Match(
          16,
          2,
          new Date(2020, 3, 9),
          new Side(this.teams.edm, 4),
          new Side(this.teams.kdi, 7),
          "Première grosse affiche de ces huitièmes de finale. D'un côté, L'Ajax Diazterdam, jeune équipe huitième de la Race mais très technique, et considérée par beaucoup d'observateurs comme ayant un niveau supérieur à son classement." +
            " De l'autre, L'Olympique Di Meco, invitée, mais premieère d'un autre championnat, considérée par ces mêmes observateurs comme une potentielle tête de série 1 bis." +
            " La vie nous réserve parfois des surprises, ainsi que disait Brandao : c'est comme la boîte à chocolat. En effet, le scénario de ce huitième touche du doigt l'irrationnalité pure." +
            " L'Ajax ouvre la marque, et l'OM enchaîne par un but contre son camp, 2-0. Certains disent que les visages des olympiens au coup d'envoi n'annoncaient rien de bon. On ne le saura jamais," +
            " mais ce dont on est sûr c'est que c'est ce moment là qu'ils choisirent pour perdre leur football. Cauchemar devenu réalité, les minutes qui suivirent verront la fougue de la jeunesse porter la marque à 7-0," +
            " dont un second CSC. Le monde entier est en état de stupeur, le match est plié. Mais, tout va très vite dans le football, et le haut niveau se joue souvent dans les têtes. À peine son premier but marqué pour revenir à 7-1," +
            " l'OM se transforma en monstre d'efficacité et de précision et enchaîna 3 autres buts. 7-4 au tableau d'affichage ! Malheureusement le réveil fut trop tardif, et c'est bien l'Ajax qui se qualifia," +
            " plutôt soulagée que le temps réglementaire arriva à son terme."
        ),
        new Match(16, 3, new Date(2020, 3, 15), new Side(this.teams.dpe, 8), new Side(this.teams.jth, 7), "Résumé à venir."),
        new Match(
          16,
          4,
          new Date(2020, 3, 8),
          new Side(this.teams.pdu, 4),
          new Side(this.teams.jmh, 8),
          "Ce match fut marqué par l'une des pires premières périodes des huitièmes de finale, les 2 protagonistes ratant pratiquement toutes leurs occasions, à tel point qu'il n'y a quasiment rien à en raconter." +
            " Lors de la seconde, le niveau de jeu redevint acceptable, le favori Godot F.C. assumant son statut et dominant logiquement la rencontre, sans jamais vraiment l'emballer." +
            " Un peu amer, Pierre eu quelques mots en fin de match, accusant son adversaire de tricherie, mais l'on vit bien qu'il n'en était pas lui-même convaincu. Victoire logique 8-4 de la tête de série numéro 4."
        ),
        new Match(
          16,
          5,
          new Date(2020, 3, 16),
          new Side(this.teams.jro, 11),
          new Side(this.teams.aro, 4),
          "Ce huitième est marqué par le forfait de Nicolas Vilas, remplacé au pied levé par Arthur Robert. Ce forfait est un coup dur pour les organisateurs du Grand Tournoi," +
            " l'affiche faisant normalement s'affronter l'un des invités les plus forts avec la tête de série numéro 3. Le match fut décevant, la différence de niveau entre les protagonistes étant trop élevée." +
            " Qualification facile pour la patte gauche 11-4."
        ),
        new Match(16, 6, new Date(2020, 3, 14), new Side(this.teams.fpi, 7), new Side(this.teams.llp, 9), "Résumé à venir."),
        new Match(
          16,
          7,
          new Date(2020, 3, 10),
          new Side(this.teams.nja, 10),
          new Side(this.teams.lch, 2),
          "Entrée en lice de l'une des plus Lionel marque en 1er / egal direct /  2-1 / break 3-1 / remontée 3-2 accusation gain de temps / 4-2 / cavalier seul - déroulement 10-2 / diff physique"
        ),
        new Match(16, 8, new Date(2020, 3, 13), new Side(this.teams.pve, 3), new Side(this.teams.dri, 9), "Résumé à venir."),
        new Match(8, 1, "", new Side(this.teams.gbr, null), new Side(this.teams.kdi, null), ""),
        new Match(8, 2, "", new Side(this.teams.dpe, null), new Side(this.teams.jmh, null), ""),
        new Match(8, 3, "", new Side(this.teams.jro, null), new Side(this.teams.llp, null), ""),
        new Match(8, 4, "", new Side(this.teams.nja, null), new Side(this.teams.dri, null), "")
      ];
    },
    rounds() {
      return [
        new Round("Huitièmes", this.sortMatchesByOrder(this.matches.filter(match => match.round === 16))),
        new Round("Quarts", this.sortMatchesByOrder(this.matches.filter(match => match.round === 8)))
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
      return matches.slice().sort((matchA, matchB) => matchA.order - matchB.order);
    }
  }
};
</script>

<style scoped>
a {
  @apply underline;
}
</style>
