<template>
  <div class="pt-10">
    <h2 class="text-xl md:text-2xl xl:text-3xl font-bold text-center mb-2">
      {{ title }}
    </h2>
    <slot></slot>
    <hr class="mt-2" />
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
