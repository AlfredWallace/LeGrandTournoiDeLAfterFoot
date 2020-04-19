<template>
  <div class="pt-10 mb-2">
    <h2 class="text-xl md:text-2xl xl:text-3xl font-bold text-center mb-2">
      {{ title }}
    </h2>
    <slot></slot>
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
