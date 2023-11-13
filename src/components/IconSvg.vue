<script setup lang="ts">
const { icon, size, color } = defineProps(['icon', 'size', 'color'])
</script>

<template>
  <svg :style="{ width: `${size}px`, height: `${size}px`, color }" class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  display: inline-block;
  fill: currentColor;
}
</style>
