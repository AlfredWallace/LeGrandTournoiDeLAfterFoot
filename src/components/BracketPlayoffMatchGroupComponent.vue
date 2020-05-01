<template>
  <div>
    <div v-for="(match, index) in matches" :key="index">
      <h4 class="text-xs italic text-gray-600 mb-1">match n°{{ index + 1 }}{{ match.date ? " - " + match.readableDate : "" }}</h4>
      <table class="w-full overflow-hidden">
        <tbody>
          <BracketSideComponent :side="match.home"></BracketSideComponent>
          <BracketSideComponent :side="match.away"></BracketSideComponent>
        </tbody>
      </table>
      <hr v-if="index < matches.length - 1" class="my-1" />
    </div>
  </div>
</template>

<script>
import { PlayOffMatchGroup } from "../types";
import BracketSideComponent from "./BracketSideComponent";

export default {
  name: "BracketPlayoffMatchGroupComponent",
  components: { BracketSideComponent },
  props: {
    confrontation: {
      type: PlayOffMatchGroup,
      required: true
    }
  },
  computed: {
    matches() {
      return this.confrontation.matches.slice().sort((matchA, matchB) => matchA.date - matchB.date);
    },
    isOver() {
      for (let i = 0; i < this.confrontation.matches.length; i++) {
        const match = this.confrontation.matches[i];
        if (match.home === null || match.away === null || match.home.score === null || match.away.score === null) {
          return false;
        }
      }
      return true;
    }
  }
};
</script>
