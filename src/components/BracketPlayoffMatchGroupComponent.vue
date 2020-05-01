<template>
  <div></div>
</template>

<script>
import { PlayOffMatchGroup } from "../types";

export default {
  name: "BracketPlayoffMatchGroupComponent",
  components: {},
  props: {
    confrontation: {
      type: PlayOffMatchGroup,
      required: true
    }
  },
  computed: {
    matches() {
      return this.confrontation.confrontations.slice().sort((matchA, matchB) => matchA.date - matchB.date);
    }
  }
};
</script>
