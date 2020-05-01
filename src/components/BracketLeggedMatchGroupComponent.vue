<template>
  <div>
    <h4 class="text-xs italic text-gray-600 mb-1">aller - {{ matches[0].readableDate }}</h4>
    <table class="w-full overflow-hidden">
      <tbody>
        <BracketSideComponent :side="matches[0].home" :side-wins="isOver && firstTeamWins"></BracketSideComponent>
        <BracketSideComponent :side="matches[0].away" :side-wins="isOver && !firstTeamWins"></BracketSideComponent>
      </tbody>
    </table>
    <hr class="my-1" />
    <h4 class="text-xs italic text-gray-600 mb-1">retour - {{ matches[1].readableDate }}</h4>
    <table class="w-full overflow-hidden">
      <tbody>
        <BracketSideComponent :side="matches[1].home" :side-wins="isOver && !firstTeamWins"></BracketSideComponent>
        <BracketSideComponent :side="matches[1].away" :side-wins="isOver && firstTeamWins"></BracketSideComponent>
      </tbody>
    </table>
  </div>
</template>

<script>
import { LeggedMatchGroup } from "../types";
import BracketSideComponent from "./BracketSideComponent";

export default {
  name: "BracketLeggedMatchGroupComponent",
  components: { BracketSideComponent },
  props: {
    confrontation: {
      type: LeggedMatchGroup,
      required: true
    }
  },
  computed: {
    matches() {
      return [this.confrontation.matchA, this.confrontation.matchB].sort((matchA, matchB) => matchA.date - matchB.date);
    },
    isOver() {
      return (
        this.matches[0].home &&
        this.matches[0].away &&
        this.matches[0].home.score !== null &&
        this.matches[1].home.score !== null &&
        this.matches[0].away.score !== null &&
        this.matches[1].away.score !== null
      );
    },
    firstTeamScore() {
      return this.matches[0].home.score + this.matches[1].away.score;
    },
    secondTeamScore() {
      return this.matches[0].away.score + this.matches[1].home.score;
    },
    firstTeamWins() {
      return this.firstTeamScore > this.secondTeamScore || (this.firstTeamScore === this.secondTeamScore && this.matches[1].away.score > this.matches[0].away.score);
    }
  }
};
</script>
