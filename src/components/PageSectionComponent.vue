<template>
  <div class="pt-10">
    <h2>{{ title }}</h2>
    <slot></slot>
    <hr />
  </div>
</template>

<script>
export default {
  name: "PageSectionComponent",
  props: {
    title: {
      style: String,
      required: true
    }
  }
};
</script>
