<template>
  <div class="shadow-md my-2 table-fixed font-mono border border-solid">
    <table class="w-full overflow-hidden">
      <tbody>
        <BracketSideComponent :side="match.home" :otherSideScore="match.away ? match.away.score : null"></BracketSideComponent>
        <BracketSideComponent :side="match.away" :otherSideScore="match.home ? match.home.score : null"></BracketSideComponent>
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
  }
};
</script>
