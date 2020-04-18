<template>
  <div>
    <div class="text-center align-middle shadow-xl fixed w-screen h-8 bg-white">
      <h1>Le Grand Tournoi de l'After Foot</h1>
    </div>
    <div class="container mx-auto pt-10 px-2">
      <h2>Tableau</h2>
      <div class="grid grid-cols-1">
        <RoundComponent
          v-for="(round, index) in rounds"
          :round="round"
          :key="index"
        >
        </RoundComponent>
      </div>

      <p class="mt-2">
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
      </p>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import RoundComponent from "./components/RoundComponent";
import { Match, Player, Round, Side } from "./types";

export default {
  name: "App",
  components: {
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
    rounds() {
      return [
        new Round("Huitièmes", [
          new Match(
            1,
            "7 avril 2020",
            new Side(this.players.gbr, 6),
            new Side(this.players.max, 5)
          ),
          new Match(
            2,
            "9 avril 2020",
            new Side(this.players.edm, 4),
            new Side(this.players.kdi, 7)
          ),
          new Match(
            3,
            "15 avril 2020",
            new Side(this.players.dpe, 8),
            new Side(this.players.jth, 7)
          ),
          new Match(
            4,
            "8 avril 2020",
            new Side(this.players.pdu, 4),
            new Side(this.players.jmh, 8)
          ),
          new Match(
            5,
            "16 avril 2020",
            new Side(this.players.jro, 11),
            new Side(this.players.aro, 4)
          ),
          new Match(
            6,
            "14 avril 2020",
            new Side(this.players.fpi, 7),
            new Side(this.players.llp, 9)
          ),
          new Match(
            7,
            "10 avril 2020",
            new Side(this.players.nja, 10),
            new Side(this.players.lch, 2)
          ),
          new Match(
            8,
            "13 avril 2020",
            new Side(this.players.pve, 3),
            new Side(this.players.dri, 9)
          )
        ]),
        new Round("Quarts", [
          new Match(
            1,
            "",
            new Side(this.players.gbr, null),
            new Side(this.players.kdi, null)
          ),
          new Match(
            2,
            "",
            new Side(this.players.dpe, null),
            new Side(this.players.jmh, null)
          ),
          new Match(
            3,
            "",
            new Side(this.players.jro, null),
            new Side(this.players.llp, null)
          ),
          new Match(
            4,
            "",
            new Side(this.players.nja, null),
            new Side(this.players.dri, null)
          )
        ])
      ];
    }
  }
};
</script>
