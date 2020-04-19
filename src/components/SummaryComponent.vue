<template functional>
  <div class="shadow-md p-2 border border-solid rounded-lg">
    <h3>
      {{ props.match.home.player.name }} vs.
      {{ props.match.away.player.name }} -
      {{ props.match.readableDate }}
    </h3>
    <p class="text-justify">
      {{ props.match.summary }}
    </p>
  </div>
</template>

<script>
import { Match } from "../types";

export default {
  name: "SummaryComponent",
  props: {
    match: {
      type: Match,
      required: true
    }
  }
};
</script>
