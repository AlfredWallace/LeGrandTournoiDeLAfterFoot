<template functional>
  <div class="shadow-md p-2 border border-solid rounded-lg">
    <div class="text-center text-xs">
      {{ props.match.readableDate }}
    </div>
    <div class="text-center font-semibold mb-3">
      {{ props.match.home.player.shortName }}
      <span class="font-normal text-xs">vs.</span>
      {{ props.match.away.player.shortName }}
    </div>
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
