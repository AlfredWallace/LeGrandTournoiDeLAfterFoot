<template>
  <div>
    <h4 class="text-xs italic text-gray-600 mb-1">{{ confrontation.readableDate }}</h4>
    <table class="w-full overflow-hidden">
      <tbody>
        <BracketSideComponent :side="confrontation.home" :side-wins="firstTeamWins"></BracketSideComponent>
        <BracketSideComponent :side="confrontation.away" :side-wins="!firstTeamWins"></BracketSideComponent>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Match } from "../types";
import BracketSideComponent from "./BracketSideComponent";

export default {
  name: "BracketMatchComponent",
  components: {
    BracketSideComponent
  },
  props: {
    confrontation: {
      type: Match,
      required: true
    }
  },
  computed: {
    firstTeamWins() {
      return this.confrontation.home.score > this.confrontation.away.score;
    }
  }
};
</script>
