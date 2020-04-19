<template>
  <div>
    <h3>{{ round.title }}</h3>
    <div class="flex flex-col justify-around h-full">
      <MatchComponent
        v-for="(match, index) in round.matches"
        :key="index"
        :match="match"
      ></MatchComponent>
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
