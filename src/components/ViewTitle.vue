<script setup lang="ts">
const { icon } = defineProps(['icon'])
</script>

<template>
  <h1
    class="text-p-t text-3xl tracking-wider font-bold border-b-[3px] border-primary w-fit pb-1 dark:text-white dark:border-white"
  >
    <IconSvg v-if="icon" class="mr-2" :icon="icon" /><slot></slot>
  </h1>
</template>
