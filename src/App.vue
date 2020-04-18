<template>
  <div>
    <div class="text-center align-middle shadow-xl fixed w-screen h-8">
      <h1>Le Grand Tournoi de l'After Foot</h1>
    </div>
    <div class="container mx-auto pt-10 px-2">
      <h2>Tableau</h2>
      <div class="grid grid-cols-1">
        <Round v-for="(round, index) in rounds" :round="round" :key="index">
        </Round>
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
import Round from "./components/Round";
export default {
  name: "App",
  components: {
    Round
  },
  data() {
    return {
      players: {
        gbr: {
          name: "Gilbert Brisbois",
          rank: 1
        },
        max: {
          name: "Max du standard",
          rank: null
        },
        edm: {
          name: "Éric Di Meco",
          rank: null
        },
        kdi: {
          name: "Kévin Diaz",
          rank: 8
        },
        dpe: {
          name: "Damien Perrinelle",
          rank: 5
        },
        jth: {
          name: "Jérôme Thomas",
          rank: null
        },
        pdu: {
          name: "Pierre Ducrocq",
          rank: null
        },
        jmh: {
          name: "Jonathan MacHardy",
          rank: 4
        },
        jro: {
          name: "Jérôme Rothen",
          rank: 3
        },
        aro: {
          name: "Arthur Robert",
          rank: null
        },
        fpi: {
          name: "Frédéric Piquionne",
          rank: null
        },
        llp: {
          name: "Laure Lepailleur",
          rank: 6
        },
        nja: {
          name: "Nicolas Jamain",
          rank: 7
        },
        lch: {
          name: "Lionel Charbonnier",
          rank: null
        },
        pve: {
          name: "Paul Vexiau",
          rank: null
        },
        dri: {
          name: "Daniel Riolo",
          rank: 2
        }
      }
    };
  },
  computed: {
    rounds() {
      return [
        {
          title: "Huitièmes",
          matches: [
            {
              order: 1,
              date: "7 avril 2020",
              home: {
                player: this.players.gbr,
                score: 6
              },
              away: {
                player: this.players.max,
                score: 5
              }
            },
            {
              order: 2,
              date: "9 avril 2020",
              home: {
                player: this.players.edm,
                score: 4
              },
              away: {
                player: this.players.kdi,
                score: 7
              }
            },
            {
              order: 3,
              date: "15 avril 2020",
              home: {
                player: this.players.dpe,
                score: 8
              },
              away: {
                player: this.players.jth,
                score: 7
              }
            }
          ]
        },
        {
          title: "Quarts"
        },
        {
          title: "Demies"
        },
        {
          title: "Finale"
        }
      ];
    }
  }
};
</script>
