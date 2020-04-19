<template functional>
  <div>
    <h3>
      {{ props.match.home.player.name }} vs.
      {{ props.match.away.player.name }} -
      {{ props.match.readableDate }}
    </h3>
    <p>
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
