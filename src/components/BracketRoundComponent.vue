<template>
  <div class="flex flex-col">
    <h3 class="shadow-lg p-2 mb-2 border border-solid font-semibold text-xl">
      {{ round.title }}
    </h3>
    <div class="flex flex-col justify-around flex-grow">
      <div v-for="(confrontation, index) in round.confrontations" :key="index" class="shadow-md my-3 font-mono border border-solid p-1">
        <component :is="confrontationComponent" :confrontation="confrontation"></component>
      </div>
    </div>
  </div>
</template>

<script>
import { CONFRONTATION_TYPE_LEG, CONFRONTATION_TYPE_PLAYOFF, Round } from "../types";
import BracketMatchComponent from "./BracketMatchComponent";
import BracketLeggedMatchGroupComponent from "./BracketLeggedMatchGroupComponent";
import BracketPlayoffMatchGroupComponent from "./BracketPlayoffMatchGroupComponent";

export default {
  name: "BracketRoundComponent",
  components: { BracketMatchComponent, BracketLeggedMatchGroupComponent, BracketPlayoffMatchGroupComponent },
  props: {
    round: {
      type: Round,
      required: true
    }
  },
  computed: {
    confrontationComponent() {
      switch (this.round.confrontationsType) {
        case CONFRONTATION_TYPE_LEG:
          return "BracketLeggedMatchGroupComponent";
        case CONFRONTATION_TYPE_PLAYOFF:
          return "BracketPlayoffMatchGroupComponent";
        default:
          return "BracketMatchComponent";
      }
    }
  }
};
</script>
