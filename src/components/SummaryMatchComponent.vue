<template functional>
  <div class="shadow-md p-2 mb-6 border border-solid">
    <div class="text-center text-xs">
      {{ props.match.readableDate }}
    </div>
    <div class="text-center font-semibold mb-3">
      {{ props.match.home.team.shortName }}
      <span class="font-normal text-xs">vs.</span>
      {{ props.match.away.team.shortName }}
    </div>
    <p class="text-justify">
      {{ props.match.summary }}
    </p>
  </div>
</template>

<script>
import { Match } from "../types";

export default {
  name: "SummaryMatchComponent",
  props: {
    match: {
      type: Match,
      required: true
    }
  }
};
</script>
