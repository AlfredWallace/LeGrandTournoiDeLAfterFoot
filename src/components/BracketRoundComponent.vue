<template>
  <div class="flex flex-col">
    <h3 class="shadow-lg p-2 mb-2 border border-solid font-semibold text-xl">
      {{ round.title }}
    </h3>
    <div class="flex flex-col justify-around flex-grow" v-if="!round.legged">
      <BracketMatchComponent v-for="(match, index) in orderedMatches" :key="index" :match="match"></BracketMatchComponent>
    </div>
    <div v-else class="flex flex-col justify-around flex-grow">
      <BracketLeggedMatchesComponent v-for="(leggedMatch, index) in leggedMatches" :key="index" :legged-match="leggedMatch"></BracketLeggedMatchesComponent>
    </div>
  </div>
</template>

<script>
import { Round } from "../types";
import BracketMatchComponent from "./BracketMatchComponent";
import BracketLeggedMatchesComponent from "./BracketLeggedMatchesComponent";

export default {
  name: "BracketRoundComponent",
  components: { BracketLeggedMatchesComponent, BracketMatchComponent },
  props: {
    round: {
      type: Round,
      required: true
    }
  },
  computed: {
    orderedMatches() {
      return this.round.matches.slice().sort((matchA, matchB) => matchA.order - matchB.order);
    },
    leggedMatches() {
      if (!this.round.legged) {
        return [];
      }

      let result = [];
      for (let i = 0; i < this.round.matches.length; i++) {
        result[this.round.matches[i].order] = result[this.round.matches[i].order] || [];
        result[this.round.matches[i].order].push(this.round.matches[i]);
      }
      return result;
    }
  }
};
</script>
