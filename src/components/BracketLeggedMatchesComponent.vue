<template>
  <div class="shadow-md my-2 font-mono border border-solid p-1">
    <div v-if="this.leggedMatch.length > 0">
      <div v-for="(match, index) in leggedMatch" :key="index">
        <h4 class="text-xs italic text-gray-600">{{ match.legOrder === 0 ? "aller" : "retour" }}</h4>
        <table class="w-full overflow-hidden">
          <tbody>
            <BracketSideComponent :side="match.home" :side-wins="isOver && ((firstTeamWins && index === 0) || (!firstTeamWins && index === 1))"></BracketSideComponent>
            <BracketSideComponent :side="match.away" :side-wins="isOver && ((firstTeamWins && index === 1) || (!firstTeamWins && index === 0))"></BracketSideComponent>
          </tbody>
        </table>
        <hr v-if="index === 0" class="my-2" />
      </div>
    </div>
  </div>
</template>

<script>
import BracketSideComponent from "./BracketSideComponent";
export default {
  name: "BracketLeggedMatchesComponent",
  components: { BracketSideComponent },
  props: {
    leggedMatch: {
      type: Array,
      required: true
    }
  },
  computed: {
    isOver() {
      return (
        this.leggedMatch[0].home &&
        this.leggedMatch[0].away &&
        this.leggedMatch[0].home.score !== null &&
        this.leggedMatch[1].home.score !== null &&
        this.leggedMatch[0].away.score !== null &&
        this.leggedMatch[1].away.score !== null
      );
    },
    firstTeamScore() {
      return this.leggedMatch[0].home.score + this.leggedMatch[1].away.score;
    },
    secondTeamScore() {
      return this.leggedMatch[0].away.score + this.leggedMatch[1].home.score;
    },
    firstTeamWins() {
      return (
        this.firstTeamScore > this.secondTeamScore || (this.firstTeamScore === this.secondTeamScore && this.leggedMatch[1].away.score > this.leggedMatch[0].away.score)
      );
    }
  }
};
</script>

<style scoped></style>
