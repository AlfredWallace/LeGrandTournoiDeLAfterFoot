<template>
  <div class="flex flex-col" v-if="matchesByDate.length > 0">
    <h3 class="font-semibold text-xl text-center underline mb-2">
      {{ round.title }}
    </h3>
    <SummaryMatchComponent v-for="(match, index) in matchesByDate" :key="index" :match="match"></SummaryMatchComponent>
  </div>
</template>

<script>
import { Round } from "../types";
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
      return this.round.matches
        .filter(match => match.summary && match.date)
        .slice()
        .sort((matchA, matchB) => matchA.date - matchB.date);
    }
  }
};
</script>
