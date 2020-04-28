<template>
  <div class="shadow-md my-2 font-mono border border-solid">
    <table class="w-full overflow-hidden">
      <tbody>
        <BracketSideComponent :side="match.home" :side-wins="firstTeamWins"></BracketSideComponent>
        <BracketSideComponent :side="match.away" :side-wins="!firstTeamWins"></BracketSideComponent>
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
    match: {
      type: Match,
      required: true
    }
  },
  computed: {
    firstTeamWins() {
      return this.match.home.score > this.match.away.score;
    }
  }
};
</script>
