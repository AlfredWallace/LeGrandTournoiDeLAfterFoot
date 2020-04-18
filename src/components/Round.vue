<template>
  <div>
    <h3>{{ round.title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Round",
  props: {
    round: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped></style>
