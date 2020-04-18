<template functional>
  <table>
    <tbody>
      <tr>
        <td>
          {{ props.match.home.player.name }}
        </td>
        <td>
          {{ props.match.home.score }}
        </td>
      </tr>
      <tr>
        <td>
          {{ props.match.away.player.name }}
        </td>
        <td>
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
