<template>
  <div>
    <h3>{{ round.title }}</h3>
    <MatchComponent
      v-for="(match, index) in round.matches"
      :key="index"
      :match="match"
    ></MatchComponent>
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
