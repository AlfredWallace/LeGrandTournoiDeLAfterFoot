<template>
  <div class="flex flex-col">
    <h3 class="shadow-lg p-2 mb-2 border border-solid font-semibold text-xl">
      {{ round.title }}
    </h3>
    <div class="flex flex-col justify-around flex-grow">
      <BracketMatchComponent v-for="(match, index) in orderedMatches" :key="index" :match="match"></BracketMatchComponent>
    </div>
  </div>
</template>

<script>
import { Round } from "../types";
import BracketMatchComponent from "./BracketMatchComponent";

export default {
  name: "BracketRoundComponent",
  components: { BracketMatchComponent },
  props: {
    round: {
      type: Round,
      required: true
    }
  },
  computed: {
    orderedMatches() {
      return this.round.matches.slice().sort((matchA, matchB) => matchA.order - matchB.order);
    }
  }
};
</script>
