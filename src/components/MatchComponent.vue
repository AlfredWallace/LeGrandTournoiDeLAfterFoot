<template functional>
  <table class="shadow-lg my-2 table-fixed font-mono">
    <tbody>
      <tr>
        <td class="side-td">
          {{ props.match.home.player.name }}
        </td>
        <td class="side-td result-td">
          {{ props.match.home.score }}
        </td>
      </tr>
      <tr>
        <td class="side-td">
          {{ props.match.away.player.name }}
        </td>
        <td class="side-td result-td">
          {{ props.match.away.score }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { Match } from "../types";

export default {
  name: "MatchComponent",
  props: {
    match: {
      type: Match,
      required: true
    }
  }
};
</script>

<style scoped>
.side-td {
  @apply border border-solid rounded px-2 py-1;
}
.result-td {
  @apply w-1/6 text-right;
}
</style>
