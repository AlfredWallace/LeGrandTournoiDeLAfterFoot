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
import { Side, Team, Round, Match, LeggedMatchGroup, PlayOffMatchGroup, CONFRONTATION_TYPE_SINGLE, CONFRONTATION_TYPE_LEG, CONFRONTATION_TYPE_PLAYOFF } from "./types";
import BracketRoundComponent from "./components/BracketRoundComponent";
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
    rounds() {
      return [
        new Round("Huitièmes", CONFRONTATION_TYPE_SINGLE, [
          new Match(
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
            new Date(2020, 3, 15),
            new Side(this.teams.dpe, 8),
            new Side(this.teams.jth, 7),
            "Rencontre équilibrée à la fois sur le papier et a posteriori. Ni décevant ni emballant, le match fut tout de même de bonne facture. Il avait d'ailleurs commencé avant le coup d'envoi, par une séance amusante de trash-talk" +
              " des Ned Bulls, fidèles à leur culture américaine. Aucune surprise donc, ces derniers faisant la course en tête durant quasiment l'intégralité de la rencontre, se faisant tout de même rejoindre de temps en temps, mais plus par" +
              " manque de chance que de maîtrise. Même lors du retour de Thomalke de 6-3 à 6-6, on ne les sentait pas en réel danger, ce qui se confirma par suite (avec une petite frayeur de fin de match tout de même). À noter un magnifique" +
              " coup franc de 40m pour le 2-1. Victoire logique 8-7, le score étant un peu flatteur pour les joueurs de Thomalke."
          ),
          new Match(
            new Date(2020, 3, 8),
            new Side(this.teams.pdu, 4),
            new Side(this.teams.jmh, 8),
            "Ce match fut marqué par l'une des pires premières périodes des huitièmes de finale, les 2 protagonistes ratant pratiquement toutes leurs occasions, à tel point qu'il n'y a quasiment rien à en raconter." +
              " Lors de la seconde, le niveau de jeu redevint acceptable, le favori Godot F.C. assumant son statut et dominant logiquement la rencontre, sans jamais vraiment l'emballer. Un peu amers, quelqes joueurs de Ducrocqmund" +
              " eurent quelques mots en fin de match, accusant leur adversaire de tricherie, mais l'on vit bien qu'ils n'en étaient pas eux-mêmes convaincus. Victoire logique 8-4 de la tête de série numéro 4."
          ),
          new Match(
            new Date(2020, 3, 16),
            new Side(this.teams.jro, 11),
            new Side(this.teams.aro, 4),
            "Ce huitième est entaché par le forfait du Benfica Porto Vilas, les joueurs étant malheureusement trop atteints par le virus. Remplacés au pied levé par l'Arthorino FC, c'est un coup dur pour les organisateurs du Grand Tournoi," +
              " l'affiche faisant normalement s'affronter l'une des équipes invitées les plus fortes avec la tête de série numéro 3. Le match fut décevant, la différence de niveau entre les protagonistes étant trop élevée." +
              " Qualification tranquille et méritée pour la Patte Gauche, 11-4."
          ),
          new Match(
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
            new Date(2020, 3, 13),
            new Side(this.teams.pve, 3),
            new Side(this.teams.dri, 9),
            "Encore une affiche déséquilibrée pour ce huitième de finale. L'AS Rioloma, bien que favorite, met la pression sur l'arbitre dès la conférence de presse d'avant-match. Peut-être échaudée par la victoire limite du Racing" +
              " et l'élimination choc de l'ODM ? Le match début encore une fois par l'ouverture du score de l'outsider. Mais la joie des joueurs de Vexiao est de courte durée. En effet, les rioliens vont coup sur coup : égaliser, " +
              "manquer une occasion énorme, prendre l'avantage, et marquer à nouveau en jouant un coup franc rapidement, ce qui nous amène à 3-1 au tableau d'affichage. La différence de niveau est criante. De plus, la Rioloma va aggraver" +
              " le score aux meilleurs moments : juste avant la pause, et juste au retour des vestaires. Le score est alors de 5 à 1, et l'espoir n'est plus permis, même si quelques erreurs de concentration vont permettre au Vexiao FC " +
              " de faire gonfler un peu leurs statistiques, jusqu'à 6-3. La fin de matche sera à sens unique pour l'AS Rioloma qui se qualifie logiquement 9 à 3."
          )
        ]),
        new Round("Quarts", CONFRONTATION_TYPE_SINGLE, [
          new Match(
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
          new Match(
            new Date(2020, 3, 22),
            new Side(this.teams.dpe, 7),
            new Side(this.teams.jmh, 8),
            "Rencontre équilibrée sur le papier, équipes offensives, sortez le pop-corn. Petite séance de trash-talk d'avant-match, c'est maintenant la norme quand les Bulls sont là. Ils tentent aussi une nouvelle forme de provocation :" +
              " la flagornerie envers l'arbitre, non pas pour espérer ses faveurs, puisqu'ils savent la chose impossible, mais pour énerver l'adversaire. Pas mal ! Bref, passons au match. Et quel match ! Le Godot FC ouvre le score dès les premières" +
              " secondes, sur une action de classe. On a à peine le temps de se dire que les joueurs des Ned Bulls se sont fait surprendre, qu'ils en encaissent un autre ! Incroyable début de partie. Cette double lame a dû les laisser en lambeaux," +
              " puisque c'est un troisième but qui vient conclure la première période... de la première période. Oui vous lisez bien, déjà 3-0 pour le Godot FC. On pourrait penser qu'un début de gestion pourrait s'installer, mais cela serait" +
              " méconnaître la philosophie de jeu de cette équipe. Toujours à l'attaque, et, pendant ce temps là - un grand classique - les Bulls se découvrent pour essayer de revenir. De claque, nous allons passer à une boucherie. Contres," +
              " passes, centres, tout réussit à la tête de série numéro 4 : 4-0, 5-0, 6-0. Le PNB finit quand même par sauver l'honneur et revient à 6-1. Perdu pour perdu, on dirait que ça se débloque dans les têtes, et fatalement dans le jeu." +
              " Mais ne comptez pas sur l'adversaire du jour pour s'arrêter là. Après ce premier but, ils remettent un pion, 7-1. Les Ned Bulls reviennent à 7-2 ? Allez, 8-2. Puis 8-3, mais, nous allons assister à quelque chose peut-être d'unique." +
              " En effet, pour ce tournoi on inaugure une nouvelle règle, les buts valent 2 points s'ils sont marqués du rond central (ou de plus loin). Puisque le chrono arrive à son terme, le PNB tente le coup en voyant l'adversaire sortir," +
              " et marquent, ce qui donne 8-5. Les joueurs du JGFC ne savent plus comment défendre : sortir pour bloquer tous les tirs, ou bloquer les cages ? Profitant de la confusion, les Bulls tentent un nouveau missile, pleine lucarne, 7-8." +
              " Improbable, mais vrai. Néanmoins, la folie s'arrêtera là, et le coup de sifflet final libérateur qualifiera le Godot FC pour les demies. À noter que les instances mondiales on déjà annoncé l'abandon de cette règle pour la" +
              " prochaine compétition."
          ),
          new Match(
            new Date(2020, 3, 21),
            new Side(this.teams.jro, 8),
            new Side(this.teams.llp, 4),
            "Quart de finale déséquilibré, mais pas tant que ça. Évidemment, le FC Patte Gauche est favori, mais le niveau commence à s'homogénéiser. Et pour faire honneur à ce qui est devenu la marque de fabrique de ce Grand Tournoi :" +
              " ouverture du score de l'outsider ! Sur un but gag en plus. Malheureusement pour le Realor, ça ne va pas suffire à déstabiliser la Patte Gauche, qui va imposer sa loi et dominer la majorité de la rencontre. Après avoir égalisé," +
              " les gauchers vont empiler les buts pour mener jusqu'à 5 à 1. Puis, gérant leur avance, vont concéder quelques buts, mais continuer à en marquer, le match se terminant sur un score assez logique de 8 à 4. Fait notable tout de même :" +
              " un but refusé aux payorais sur hors-jeu en plein milieu du match, est finalement accordé à la VAR en toute fin de rencontre, ce qui en fait l'arbitrage avec le retour en arrière le plus lointain jamais effectué."
          ),
          new Match(
            new Date(2020, 3, 23),
            new Side(this.teams.nja, 8),
            new Side(this.teams.dri, 3),
            "Jusqu'à présent, aucune équipe ne s'est faite éliminer par une autre moins bien classée. Allons-nous assister à la première surprise du tournoi ? Oui, mais pas pour les raisons que vous pensez. Ce match restera dans les annales" +
              " de l'histoire de l'anti-jeu. Une insulte au baron Coubertin, dont je rappelle la formule «L'important dans la vie ce n'est pas le triomphe mais le combat ; l'essentiel ce n'est pas d'avoir vaincu mais de s'être bien battu»" +
              " (et non pas «mais d'avoir participé» comme je le l'entends partout, ce qui change du tout au tout, vous en conviendrez). Cette rencontre est l'exact contre-exemple de cette citation. Mais ce n'est pas la seule bizarrerie qui l'entoure" +
              " car les joueurs du PSJ affirement que l'arbitre leur aurait dit avoir subit des pressions pour faire gagner la Rioloma... Le match démarre sur un faible rythme, mais l'ASR ouvre tout de même le score rapidement. Nouvelle étrangeté," +
              " l'abitre s'entrechoque avec un joueur et le match est arrêté le temps qu'il reprenne ses esprits. Après la reprise, les jaminsiens égalisent sur corner. Les deux équipes vont marquer encore une fois chacune et rentrer au vestiaire" +
              " à 2 partout, après une première période bien terne. La seconde commence avec un PSJ plus entreprenant, et logiquement récompensé. 3-2. C'est maintenant que la honte va doucement mais sûrement transformer cette rencontre en parodie" +
              " de football. Les jaminsiens vont faire le break et donc mener 4 à 2, et les joueurs de la Rioloma vont alors avoir des attidues étranges, hors du tempo. Quelque chose cloche. Ils réussissent à réduire l'écart mais sur un pénalty" +
              " venant d'une faute gag. Le match continue dans cette anbiance incompréhensible entre questionnement et malaise. Les gens ne pensent pas que des joueurs professionnels puissent simplement abandonner un match de la sorte." +
              " Pourtant tout devient trop facile pour le PSJ : 5-3, 6-3, 7-3. Comble du mépris, l'ASR donne carrément un ballon de but volontairement ! 8-3. L'arbitre ne fait même pas jouer le temps additionnel et coupe court à cette mascarade." +
              " La bronca descendant des tribunes est spectaculaire, mais justifiée. Messieurs de la Rioloma, le sport ne vous dit pas merci. Dans les couloirs, les organisateurs sont remontés et les sanctions des instances pourraient tomber" +
              " rapidement. L'amende, et je ne parle pas que d'argent, pourrait être salée."
          )
        ]),
        new Round("Demies", CONFRONTATION_TYPE_LEG, [
          new LeggedMatchGroup(
            new Match(
              new Date(2020, 3, 28),
              new Side(this.teams.gbr, 8),
              new Side(this.teams.jmh, 7),
              "Grosse affiche pour cette seconde demie aller. Les deux équipes ont néanmoins un parcours entâché soit de soupçon de favoritisme, soit de préparatifs à la limite de la légalité. La rencontre débute étrangement lentement," +
                " mais la situation va soudainement se débloquer et le jeu s'accélérer. C'est le JGFC qui va ouvrir les hostilités, et, profitant du manque de réaction de l'adversaire, doubler la mise dans la foulée. 0-2, le favori est en mauvaise posture," +
                " mais le match est loin d'être terminé. Sur une action un peu confuse, les strasbrisbois vont réduire l'écart. Après un petit moment de flottement, sur une autre action apparemment anodine, ils vont égaliser, 2 partout. La physionomie du match" +
                " va alors radicalement changer. Le Racing retrouve son meilleur niveau et roule littéralement sur son adversaire, en collant 4 buts d'affilé et mener 6 à 2, dont une magnifique action d'école sur le cinquième. Les joueurs du Godot FC" +
                " vont sortir la tête de l'eau et réduire l'écart, mais les strasbrisbois remarquent instantanéement sur un contre assassin. L'outsider n'a pas dit son dernier mot, se lance corps et âme à l'offensive. Il réussit à faire douter l'adversaire." +
                " Incompréhension entre les défenseurs du Racing : 7-4. Passe en retrait interceptée : 7-5. La tension monte. Sur l'aciton suivante, l'arbitre siffle pénalty pour le RCS ! C'est très litigieux, une nouvelle polémique s'installe, mais le but" +
                " est marqué, 8-5. Nous arrivons à la fin du match, la peur a définitivement gagné les jambes strasbrisboises, et c'est maintenant une attaque-défense du JGFC. Réduction de l'écart juste avant le temps additionnel, 8-6, le Godot FC" +
                " va-t-il arracher la prolongation ? Le suspense est insoutenable ! Nouveau but, 8-7 ! Et l'arbitre siffle la fin du match ! C'est encore une fois d'un petit but d'écart que le Racing s'en sort, décidément ! Le match retour promet" +
                " d'être bouillant."
            ),
            new Match(
              new Date(2020, 3, 30),
              new Side(this.teams.jmh, 6),
              new Side(this.teams.gbr, 4),
              "Dernière rencontre de ces demi-finales, pour rejoindre le FC Patte Gauche. Le favori de la compétition, bien que présent à ce stade, a démontré qu'il n'était peut-être pas si solide que cela. Vainqueur à domicile à l'aller," +
                " mais seulement d'un point, le RC Strasbrisbois va devoir afficher un niveau à la hauteur de son statut. Le match commence par un but de ce dernier, mais le Godot FC égalise peu de temps après. Le match est pour l'instant très" +
                " équilibré. Le RCS va à nouveau prendre la tête, et à nouveau se faire égaliser, 2 partout. La prochaine action restera peut-être comme le tournant du match. En effet, malgré un tacle appuyé d'un strasbrisbois sur un joueur adverse," +
                " ce dernier réussit tout de même une passe magnifique qui mit l'attaque du Godot FC en supériorité numérique 4 contre 2. L'arbitre ne laissa pas jouer l'avantage, s'attirant les foudres des joueurs et du staff. Une fois la tension" +
                " retombée et le coup franc joué, on constate imméditement deux choses : le JGFC, probablement mu par un sentiment d'injustice, monte l'intensité d'un cran, et à l'inverse, le Racing devient fébrile. La rencontre tourne maintenant" +
                " clairement à l'avantage des locaux, mais ils ne concrétisent pas encore. Les strasbrisbois jouent le nul, qui leur suffit. Mais c'est un jeu dangereux, et à l'approche de la fin de la rencontre, le Godot FC finit par marquer." +
                " À 3-2, ce sont eux les qualifiés ! Le RCS se remet à jouer, et égalise rapidement, on se dit qu'ils auraient pu ne pas attendre... 3-3. Malgré l'égalisation, les joueurs du JGFC sentent qu'il y a quelque chose à faire. Ils poussent," +
                " et sont récompensés, 4-3. Cette fois, ils contiennent la tentative d'égalisation et interceptent la balle, l'attaquant de pointe file seul au but, décale le gardien, 5-3 ! Deux buts d'avance, la grosse perf se rapproche !" +
                " Nous allons bientôt entrer dans le temps additionnel, les espaces sont maintenant énormes, le Racing fait du houra-football et tente n'importe quoi... Et finit par marquer sur une action complètement désorganisée. 5-4, mais ce n'est" +
                " pas suffisant ! Le Fergie time arrive maintenant à son terme, mais le RCS a obtenu un dernier corner avec un pressing extrême. Tous les joueurs montent, même le gardien évidemment. Ça sera la dernière action. Très bizarrement, " +
                " ils le tirent à deux, pour décaler, ce qui donne une frappe ratée dans la surface (comme toujours) ! L'arbitre ne siffle toujours pas, les joueurs du Godot FC dégagent, mais un de leurs attaquant était resté proche du rond central," +
                " et la récupère, il se retrouve donc seul, avec pour seul adversaire le dernier défenseur puisque le gardien n'a pas eu le temps de revenir ! Il part en travers, décale, et décoche une longue frappe au sol, tous les yeux sont rivés" +
                " sur la trajectoire... qui termine dans le buts. 6-4, 13-12 sur les deux rencontres pour le JGFC, c'est terminé. Beaux joueurs, les strasbrisbois félicitent leur bourreau du jour. Il fallait bien que ça casse un jour, à force de passer" +
                " d'un point à chaque tour. La finale sera donc FC Patte Gauche contre Jonathandan Godot FC, respectivement têtes de série 3 et 4, et se jouera en playoff, le premier à 3 victoires. Le spectacle sera au rendez-vous !"
            )
          ),
          new LeggedMatchGroup(
            new Match(
              new Date(2020, 3, 27),
              new Side(this.teams.nja, 9),
              new Side(this.teams.jro, 8),
              "Pour cette première demi-finale aller, le Paris Saint-Jamin reçoit l'un des trois favoris à la victoire finale. Mais, en ayant éliminé un des deux autres au tour précédent, malgré le contexte que l'on sait," +
                " l'outsider ne l'est pas forcément de beaucoup. Le match démarre mal pour les joueurs jaminsiens, le FC Patte Gauche attaquant pied au plancher et marquant dès les premières secondes. Le PSJ ne laisse pas le doute s'installer" +
                " et égalise sur une belle action collective. Le favori continue de mettre la pression et reprend l'avantage, 1-2. Les jaminsiens continuent d'envoyer du beau jeu et égalisent à nouveau. Le but est probalement entâché d'un" +
                " léger hors-jeu, mais l'arbitre, peut-être sous-pression, l'accorde. Les équipes vont d'un camp à l'autre à une vitesse incroyable, les défenses sont aux abois. 2-3, 3-3 (à nouveau un hors jeu ? Difficile à dire.), puis 3-4." +
                " Grosse erreur du gardien du FCPG qui cherchait le camp adverse du pied et était sorti : punition immédiate d'un lob du rond central, but compte double pour le PSJ qui prend la tête pour la première fois du match, 5 à 4 !" +
                " Les joueurs de la Patte Gauche décident de monter l'intensité d'un cran. Le pressing devient très physique et paye, ils vont marquer deux fois dans les minutes suivantes. Les efforts déployés vont avoir un impact sur la lucidité" +
                " défensive, et les jaminsiens vont encore une fois égaliser, nous sommes alors à 6 partout. L'envie répond à la technique, 6-7, 7-7. Juste avant l'entrée dans le temps additionnel, le FCPG met son huitième but, le K.O. est proche." +
                " Mais le K.O. de qui ? Le favori pensait peut-être avoir pris un ascendant psychologique, mais, poussé par son public, le PSJ va égaliser juste après. L'arbitre regarde sa montre, le banc de la Patte Gauche met une pression dingue." +
                " Il reste un corner, celui de la dernière chance pour arracher la victoire sur le fil. Tiré à merveille, déposé sur la tête du capitaine, comme un symbole. le cuir finit au fond des filets. Explosion du stade, victoire 9-8 des locaux." +
                " Évidemment, c'est un bon score à l'exterieur, mais les joueurs du FCPG étaient venus faire un résultat. Étant invaincus à domicile cette saison, on peut supposer que le match retour sera une toute autre histoire, mais ils sont prévenus."
            ),
            new Match(
              new Date(2020, 3, 29),
              new Side(this.teams.jro, 8),
              new Side(this.teams.nja, 7),
              "Match retour de la première demie-finale gagnée sur le fil 9 à 8 par le PSJ. Le FC Patte Gauche reste favori pour la qualification, mais ne s'attend pas à ce que ce soit facile. Dés les premières secondes, le ton est donné," +
                " et l'on sent que les jaminsiens veulent frapper fort d'entrée afin d'essayer d'assomer l'adversaire. La puissance de feu de leur attaque va écraser d'entrée la défense du FCPG et planter non pas un ni deux mais trois buts" +
                " avant même la moitié de la première période. 0-3, stupeur dans les tribunes, la qualification s'éloigne à grands pas ! Le ballon tourne à une vitesse folle, les têtes aussi. Les joueurs de la Patte Gauche se mettent à" +
                " bousculer physiquement leur adversaire afin de le contrer, et finissent par reprendre le contrôle du jeu. Doucement mais sûrement, la technique fait son effet, et les buts arrivent. 1-3, 2-3, puis 3-3, les jaminsiens ne" +
                " trouvent pas tellement de solutions. Le FCPG vire en tête avant la pause, 4-3, le choc du début de match est maintenant effacé. Au retour des vestiaires, les visiteurs cueilent à nouveau à froid le favori pour revenir à hauteur !" +
                " Mais très vite le rouleau compresseur se remet en route, et les joueurs du FC Patte Gauche vont marquer sur deux de leurs trois occasions énormes pour mener 6-4. Le PSJ sent que la qualification lui échappe, mais n'a pas" +
                " tellement d'autre choix que tenter le tout pour le tout. Les équipes vont se rendre la monnaie de leurs pièces tour à tour, pour un final extraordinaire. Les jaminsiens reviennent à 6-5, mais en réattaquant pour tenter l'égalisation," +
                " se font contrer et distancer à 7-5. L'entraîneur fait all-in avec son attaque, la défense tient miraculeusement, un premier but est marqué, 7-6. Nous sommes maintenant dans le temps additionnel, un nul suffirait. Sur une incroyable" +
                " action avec des passes à risque de toute part que seul le désespoir autorise à tenter, le PSJ revient à hauteur et se qualifie virtuellement ! Il doit rester une ou deux actions à jouer, tous les acteurs sont dans un état second !" +
                " C'est maintanant le FCPG qui se jette sur les buts adverses... Et obtient un corner... Le scénario du match aller peut-il se répéter, mais à l'inverse ? Cette fois, il n'y aura pas de match retour, c'est certainement la dernière action," +
                " le gardien monte, perdu pour perdu. Le corner est tiré. Une longue balle second poteau, une tête hors du lot, un saut improbable, un lob, une lucarne. 11 joueurs baissent la tête, 11 autres exultent, la Patte Gauche est en finale."
            )
          )
        ]),
        new Round("Finale", CONFRONTATION_TYPE_PLAYOFF, [
          new PlayOffMatchGroup([
            new Match(null, new Side(this.teams.jro, null), new Side(this.teams.jmh, null), ""),
            new Match(null, new Side(this.teams.jro, null), new Side(this.teams.jmh, null), ""),
            new Match(null, new Side(this.teams.jro, null), new Side(this.teams.jmh, null), "")
          ])
        ])
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
