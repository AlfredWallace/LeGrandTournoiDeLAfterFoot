<template functional>
  <div
    class="shadow-md my-2 table-fixed font-mono border border-solid rounded-lg border-collapse"
  >
    <table
      class="w-full overflow-hidden border border-solid rounded-lg border-collapse"
    >
      <tbody>
        <tr
          :class="[
            props.match.home.score > props.match.away.score
              ? 'bg-green-200 font-semibold'
              : 'text-gray-600'
          ]"
        >
          <td class="side-td">
            {{ props.match.home.player.name }}
            <span v-if="props.match.home.player.rank" class="rank-pill">
              {{ props.match.home.player.rank }}
            </span>
          </td>
          <td class="side-td result-td">
            {{ props.match.home.score }}
          </td>
        </tr>
        <tr
          :class="[
            props.match.away.score > props.match.home.score
              ? 'bg-green-200 font-semibold'
              : 'text-gray-600'
          ]"
        >
          <td class="side-td">
            {{ props.match.away.player.name }}
            <span v-if="props.match.away.player.rank" class="rank-pill">
              {{ props.match.away.player.rank }}
            </span>
          </td>
          <td class="side-td result-td">
            {{ props.match.away.score }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
  @apply px-2 py-1;
}
.result-td {
  @apply w-1/6 text-right;
}
.rank-pill {
  @apply text-xs border border-solid rounded-full py-1 px-2 bg-gray-100;
}
</style>
