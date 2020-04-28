<template>
  <tr :class="[sideWins ? 'bg-green-200 font-semibold' : 'text-gray-600']">
    <td class="side-td">
      <div v-if="side">
        {{ side.team.name }}
        <span v-if="side.team.rank" class="rank-pill" :class="rankPillClasses">
          {{ side.team.rank }}
        </span>
      </div>
      <div v-else class="italic">
        à déterminer
      </div>
    </td>
    <td class="side-td result-td">
      <div v-if="side">
        {{ side.score }}
      </div>
    </td>
  </tr>
</template>

<script>
import { Side } from "../types";

export default {
  name: "BracketSideComponent",
  props: {
    side: {
      type: Side
    },
    sideWins: {
      type: Boolean
    }
  },
  computed: {
    rankPillClasses() {
      if (!this.side) {
        return "";
      }

      switch (this.side.team.rank) {
        case 1:
          return "text-yellow-500 text-sm";
        case 2:
          return "text-gray-500 text-sm";
        case 3:
          return "text-orange-700 text-sm";
        default:
          return "text-xs";
      }
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
  @apply border border-solid rounded-full py-1 px-2 bg-white;
}
</style>
