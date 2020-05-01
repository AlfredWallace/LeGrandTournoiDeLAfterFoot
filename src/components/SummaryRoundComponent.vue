<template>
  <div class="flex flex-col" v-if="matchesByDate.length > 0">
    <h3 class="font-semibold text-xl text-center underline mb-2">
      {{ round.title }}
    </h3>
    <SummaryMatchComponent v-for="(match, index) in matchesByDate" :key="index" :match="match"></SummaryMatchComponent>
  </div>
</template>

<script>
import { CONFRONTATION_TYPE_LEG, CONFRONTATION_TYPE_PLAYOFF, Round } from "../types";
import SummaryMatchComponent from "./SummaryMatchComponent";

export default {
  name: "SummaryRoundComponent",
  components: { SummaryMatchComponent },
  props: {
    round: {
      type: Round,
      required: true
    }
  },
  computed: {
    matchesByDate() {
      let matches;

      switch (this.round.confrontationsType) {
        case CONFRONTATION_TYPE_LEG:
          matches = this.round.confrontations.reduce((matchesAcc, leggedMatchGroup) => {
            matchesAcc.push(leggedMatchGroup.matchA);
            matchesAcc.push(leggedMatchGroup.matchB);
            return matchesAcc;
          }, []);
          break;
        case CONFRONTATION_TYPE_PLAYOFF:
          matches = this.round.confrontations.reduce((matchesAcc, playoffMatchGroup) => {
            return matchesAcc.concat(playoffMatchGroup.matches);
          }, []);
          break;
        default:
          matches = this.round.confrontations;
      }

      return matches
        .filter(this.matchFilter)
        .slice()
        .sort(this.matchSort);
    }
  },
  methods: {
    matchFilter(match) {
      return match.summary && match.date;
    },
    matchSort(matchA, matchB) {
      return matchA.date - matchB.date;
    }
  }
};
</script>
