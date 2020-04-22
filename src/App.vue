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
          <BracketRoundComponent v-for="(round, index) in rounds" :round="round" :key="index"> </BracketRoundComponent>
        </div>
      </PageSectionComponent>

      <PageSectionComponent title="Déroulé de la compétition">
        <div class="grid grid-cols-1 gap-6">
          <SummaryRoundComponent v-for="(round, index) in rounds" :round="round" :key="index"></SummaryRoundComponent>
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
import BracketRoundComponent from "./components/BracketRoundComponent";
import { Match, Team, Round, Side } from "./types";
import PageSectionComponent from "./components/PageSectionComponent";
import SummaryRoundComponent from "./components/SummaryRoundComponent";

export default {
  name: "App",
  components: {
    SummaryRoundComponent,
    PageSectionComponent,
    BracketRoundComponent
  },
  data() {
    return {
      teams: {
        gbr: new Team("RC Strasbrisbois", "Racing", 1),
        max: new Team("Royal Standard de Max", "Standard", null),
        edm: new Team("Olympique Di Meco", "ODM", null),
        kdi: new Team("Layax Diazterdam", "Layax", 8),
        dpe: new Team("Perry Ned Bulls", "Ned Bulls", 5),
        jth: new Team("Thomalke 04", "Thomalke", null),
        pdu: new Team("Borussia Ducrocqmund", "Ducrocqmund", null),
        jmh: new Team("Jonathandan Godot FC", "Godot FC", 4),
        jro: new Team("FC Patte Gauche", "FCPG", 3),
        aro: new Team("Arthorino FC", "Arthorino", null),
        fpi: new Team("AS Piqui Paqua", "Paqua", null),
        llp: new Team("Realor El Payor", "Real", 6),
        nja: new Team("Paris Saint-Jamain", "PSJ", 7),
        lch: new Team("Inter Charbonara FC", "Inter", null),
        pve: new Team("Athletic Vexiao", "Vexiao", null),
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
          "Première grosse affiche de ces huitièmes de finale. D'un côté, Layax Diazterdam, jeune équipe huitième de la Race mais très technique, et considérée par beaucoup d'observateurs comme ayant un niveau supérieur à son classement." +
            " De l'autre, L'Olympique Di Meco, invitée, mais premieère d'un autre championnat, considérée par ces mêmes observateurs comme une potentielle tête de série 1 bis." +
            " La vie nous réserve parfois des surprises, ainsi que disait Brandao : c'est comme la boîte à chocolat. En effet, le scénario de ce huitième touche du doigt l'irrationnalité pure." +
            " Layax ouvre la marque, et l'ODM enchaîne par un but contre son camp, 2-0. Certains disent que les visages des olympiens au coup d'envoi n'annoncaient rien de bon. On ne le saura jamais," +
            " mais ce dont on est sûr c'est que c'est ce moment là qu'ils choisirent pour perdre leur football. Cauchemar devenu réalité, les minutes qui suivirent verront la fougue de la jeunesse porter la marque à 7-0," +
            " dont un second CSC. Le monde entier est en état de stupeur, le match est plié. Mais, tout va très vite dans le football, et le haut niveau se joue souvent dans les têtes. À peine son premier but marqué pour revenir à 7-1," +
            " l'ODM se transforma en monstre d'efficacité et de précision et enchaîna 3 autres buts. 7-4 au tableau d'affichage ! Malheureusement le réveil fut trop tardif, et c'est bien Layax qui se qualifia," +
            " plutôt soulagée que le temps réglementaire arriva à son terme."
        ),
        new Match(
          16,
          3,
          new Date(2020, 3, 15),
          new Side(this.teams.dpe, 8),
          new Side(this.teams.jth, 7),
          "Rencontre équilibrée à la fois sur le papier et a posteriori. Ni décevant ni emballant, le match fut tout de même de bonne facture. Il avait d'ailleurs commencé avant le coup d'envoi, par une séance amusante de trash-talk" +
            " des Ned Bulls, fidèles à leur culture américaine. Aucune surprise donc, ces derniers faisant la course en tête durant quasiment l'intégralité de la rencontre, se faisant tout de même rejoindre de temps en temps, mais plus par" +
            " manque de chance que de maîtrise. Même lors du retour de Thomalke de 6-3 à 6-6, on ne les sentait pas en réel danger, ce qui se confirma par suite (avec une petite frayeur de fin de match tout de même). À noter un magnifique" +
            " coup franc de 40m pour le 2-1. Victoire logique 8-7, le score étant un peu flatteur pour les joueurs de Thomalke."
        ),
        new Match(
          16,
          4,
          new Date(2020, 3, 8),
          new Side(this.teams.pdu, 4),
          new Side(this.teams.jmh, 8),
          "Ce match fut marqué par l'une des pires premières périodes des huitièmes de finale, les 2 protagonistes ratant pratiquement toutes leurs occasions, à tel point qu'il n'y a quasiment rien à en raconter." +
            " Lors de la seconde, le niveau de jeu redevint acceptable, le favori Godot F.C. assumant son statut et dominant logiquement la rencontre, sans jamais vraiment l'emballer. Un peu amers, quelqes joueurs de Ducrocqmund" +
            " eurent quelques mots en fin de match, accusant leur adversaire de tricherie, mais l'on vit bien qu'ils n'en étaient pas eux-mêmes convaincus. Victoire logique 8-4 de la tête de série numéro 4."
        ),
        new Match(
          16,
          5,
          new Date(2020, 3, 16),
          new Side(this.teams.jro, 11),
          new Side(this.teams.aro, 4),
          "Ce huitième est entaché par le forfait du Benfica Porto Vilas, les joueurs étant malheureusement trop atteints par le virus. Remplacés au pied levé par l'Arthorino FC, c'est un coup dur pour les organisateurs du Grand Tournoi," +
            " l'affiche faisant normalement s'affronter l'une des équipes invitées les plus fortes avec la tête de série numéro 3. Le match fut décevant, la différence de niveau entre les protagonistes étant trop élevée." +
            " Qualification tranquille et méritée pour la Patte Gauche, 11-4."
        ),
        new Match(
          16,
          6,
          new Date(2020, 3, 14),
          new Side(this.teams.fpi, 7),
          new Side(this.teams.llp, 9),
          "Affiche prometteuse pour les connaisseurs, pas de favoris pour la victoire finale, mais des niveaux équivalents, et des styles différents. Le match démarre sur un petit rythme, les équipes sont frileuses," +
            " et la situation a du mal à se débloquer. Il faudra une erreur incroyable et un csc du Paqua sur une action peu dangereuse du Realor pour ouvrir le score. La rencontre s'emballe alors. Deux magnifiques actions collectives " +
            " vont remettre le Paqua devant à 2-1, mais une tête rageuse de la star payoraise sur le corner suivant remet les équipes à égalité. Les piquistes remettent le pied sur le ballon, et d'une passe éliminant 2 lignes passent à nouveau" +
            " en tête. Le Realor décide de se faire respecter en infligeant un pressing monstre, et marque coup sur coup à nouveau sur corner, puis sur un coup franc juste devant la surface. 3-4. Nouvelles séquences de jeu collectif du Paqua," +
            " décidé à imposer son jeu, moment de folie avec 4 occasions dont 2 au fond : 5-4. Les payorais persistent eux aussi dans leur tactique et le physique commence à se faire sentir. But en puissance des 30m, 5-5, contre assassin, 5-6," +
            " et une nouvelle tête sur corner du leader qui pour la première fois du match permet à une équipe de mener par plus d'un but d'écart ! Le break est fait, 5-7 pour le Realor. Il ne sera pas dit ici que cette équipe ne joue qu'avec" +
            " la force : sur un nouveau coup france obtenu grâce au pressing, une fraction de seconde d'inattention suffit à passer la balle à celui qui s'était fait oublier, et qui n'a plus qu'à la pousser au fond des filets, double break 5-8 !" +
            " À partir de maintenant, les payorais attendent en bloc et les piquistes assiègent leur camp. La défense paraît impénétrable, mais la qualité des passes est à ce moment là stratosphérique, les occasions s'empilent, mais pas seulement !" +
            " Un premier but pour réduire l'écart. Un autre. 6-8. Le chrono tourne mais le match n'est pas arrivé à son terme. La panique gagne le Realor, c'est dans ces moments là que les erreurs arrivent, ce qui profite à nouveau à l'adversaire," +
            " encore un but, 7-8, incroyable ! Mais tous les risques pris pour essayer de revnir avant que l'arbitre siffle la fin de la rencontre vont s'avérer fatals : un contre payorais, joué à moitié pour gagner du temps," +
            " scellera le sort de la rencontre par un second csc ! Quelle fin de match. Les spectateurs en auront eu pour leur argent."
        ),
        new Match(
          16,
          7,
          new Date(2020, 3, 10),
          new Side(this.teams.nja, 10),
          new Side(this.teams.lch, 2),
          "Entrée en lice de l'une des plus faibles équipes, l'Inter Charbonara. Contre toute attente ils ouvrent le score très rapidement dans le match. Eux-mêmes surpris par l'improbable scénario, il se rendront coupables" +
            " d'un manque de concentration, permettant au PSJ d'égaliser dès l'engagement. De nouveau à égalité, le favori reprend les commandes du match et commence à dérouler, 2-1, puis 3-1. Le matche entre alors dans un faux-rythme," +
            " les interistes profitentant à leur tour d'une faute d'inattention pour revenir à 3-2. La première période se termine en passe à dix entre les joueurs du Paris Saint-Jamain. Au retour des vestiaires, dont les murs auraient " +
            " tremblés, ils reviennent clairement avec d'autres ambitions. L'Inter finit par craquer, 4-2. L'ascendant psychologique étant définitivement acquis, et la différence physique venant s'y ajouter, on assiste alors" +
            " à un véritable cavalier seul jusqu'à la fin du match qui se terminera sur le score fleuve de 10 à 2."
        ),
        new Match(
          16,
          8,
          new Date(2020, 3, 13),
          new Side(this.teams.pve, 3),
          new Side(this.teams.dri, 9),
          "Encore une affiche déséquilibrée pour ce huitième de finale. L'AS Rioloma, bien que favorite, met la pression sur l'arbitre dès la conférence de presse d'avant-match. Peut-être échaudée par la victoire limite du Racing" +
            " et l'élimination choc de l'ODM ? Le match début encore une fois par l'ouverture du score de l'outsider. Mais la joie des joueurs de Vexiao est de courte durée. En effet, les rioliens vont coup sur coup : égaliser, " +
            "manquer une occasion énorme, prendre l'avantage, et marquer à nouveau en jouant un coup franc rapidement, ce qui nous amène à 3-1 au tableau d'affichage. La différence de niveau est criante. De plus, la Rioloma va aggraver" +
            " le score aux meilleurs moments : juste avant la pause, et juste au retour des vestaires. Le score est alors de 5 à 1, et l'espoir n'est plus permis, même si quelques erreurs de concentration vont permettre au Vexiao FC " +
            " de faire gonfler un peu leurs statistiques, jusqu'à 6-3. La fin de matche sera à sens unique pour l'AS Rioloma qui se qualifie logiquement 9 à 3."
        ),
        new Match(
          8,
          1,
          new Date(2020, 3, 20),
          new Side(this.teams.gbr, 9),
          new Side(this.teams.kdi, 8),
          "Premier quart de finale, entre la tête de série et la sensation fraîcheur du moment. Portés par leur démonstration en huitièmes et leur attaque de feu, les joueurs de Layax cueillent à froid les strasbrisbois." +
            " But dès les premières secondes, but sur l'engagement suivant, le ton est donné. K.O. debout, le Racing essaie de contenir les vagues, mais rien n'y fait, la marque va s'alourdir à 3-0 puis 4-0 ! L'écart est conséquent alors que" +
            " nous ne sommes même pas à la mi-temps. L'entraîneur strasbrisbois décide de changer totalement de tactique et de prendre Layax à son jeu : tout pour l'attaque. Et ça marche ! Son équipe marque 1 puis 2 buts, mais en concède un autre," +
            " ce qui porte la marque à 5-2. S'en suit un pénalty litigieux accordé au RCS, qui le marque, puis, la frustration faisant commettre une faute grossière aux joueurs de Layax, joue un coup franc rapidement dans la confusion et " +
            " revient à 5-4 ! Les deux équipes continuent d'attaquer sans réserves, mais le Racing marque pratiquement 2 buts pour chaque qu'il concède, et revient à hauteur : 6 partout ! La foule est en délire mais a clairement pris fait et cause" +
            " pour la jeunesse de Layax. À ce moment du match, les deux équipes, voyant le chrono arriver à son terme, n'osent plus prendre de risques et attendent la prolongation, qui aura bien lieu. Malgré la fatigue, cette dernière commence" +
            " tambour battant. Le rythme ne baisse pas, mais les espaces s'agrandissent. Layax marque. 7-6. Le Racing revient. 7-7. Layax reprend l'avantage. 8-7. Le Racing re-revient. 8-8. L'équilibre de ce match est totalement instable." +
            " Le chrono tourne, tourne, et la séance de tirs au but arrive à grands pas. Mais un favori n'est pas favori pour rien, et sur la dernière action du match, le dernier corner, la dernière tête, le RCS marque, et" +
            " envoie un message au reste du monde : voilà ce qu'est un champion. C'est bien sûr cruel pour ces jeunes joueurs flamboyants de Layax, qui n'auront été menés au score que 30 secondes, mais ce sont les seules qui comptent." +
            " Une nouvelle fois, le Racing gagne d'un petit point, une nouvelle fois, sa victoire agitera les gazettes, mais une nouvelle fois, le Racing est au tour suivant."
        ),
        new Match(8, 2, "", new Side(this.teams.dpe, null), new Side(this.teams.jmh, null), ""),
        new Match(
          8,
          3,
          new Date(2020, 3, 21),
          new Side(this.teams.jro, 8),
          new Side(this.teams.llp, 4),
          "Quart de finale déséquilibré, mais pas tant que ça. Évidemment, le FC Patte Gauche est favori, mais le niveau commence à s'homogénéiser. Et pour faire honneur à ce qui est devenu la marque de fabrique de ce Grand Tournoi :" +
            " ouverture du score de l'outsider ! Sur un but gag en plus. Malheureusement pour le Realor, ça ne va pas suffire à déstabiliser la Patte Gauche, qui va imposer sa loi et dominer la majorité de la rencontre. Après avoir égalisé," +
            " les gauchers vont empiler les buts pour mener jusqu'à 5 à 1. Puis, gérant leur avance, vont concéder quelques buts, mais continuer à en marquer, le match se terminant sur un score assez logique de 8 à 4. Fait notable tout de même :" +
            " un but refusé aux payorais sur hors-jeu en plein milieu du match, est finalement accordé à la VAR en toute fin de rencontre, ce qui en fait l'arbitrage avec le retour en arrière le plus lointain jamais effectué."
        ),
        new Match(8, 4, new Date(2020, 3, 23), new Side(this.teams.nja, null), new Side(this.teams.dri, null), ""), // petit joueur - a préparé meédiatiquement son élimination
        new Match(4, 1, null, new Side(this.teams.gbr, null), new Side(this.teams.jmh, null), ""),
        new Match(4, 2, null, new Side(this.teams.jro, null), null, ""),
        new Match(2, 1, null, null, null, "")
      ];
    },
    rounds() {
      return [
        new Round(
          "Huitièmes",
          this.matches.filter(match => match.round === 16)
        ),
        new Round(
          "Quarts",
          this.matches.filter(match => match.round === 8)
        ),
        new Round(
          "Demies",
          this.matches.filter(match => match.round === 4)
        ),
        new Round(
          "Finale",
          this.matches.filter(match => match.round === 2)
        )
      ];
    }
  }
};
</script>

<style scoped>
a {
  @apply underline;
}
</style>
