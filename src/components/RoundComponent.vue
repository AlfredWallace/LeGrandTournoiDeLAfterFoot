<template>
  <div class="flex flex-col">
    <h3 class="shadow-lg p-2 mb-2 border border-solid font-semibold text-xl">
      {{ round.title }}
    </h3>
    <div class="flex flex-col justify-around flex-grow">
      <MatchComponent v-for="(match, index) in round.matches" :key="index" :match="match"></MatchComponent>
    </div>
  </div>
</template>

<script>
import { Round } from "../types";
import MatchComponent from "./MatchComponent";

export default {
  name: "RoundComponent",
  components: { MatchComponent },
  props: {
    round: {
      type: Round,
      required: true
    }
  }
};
</script>
