<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const open = () => (show.value = true)
const hidden = () => (show.value = false)

defineExpose({
  openDialog: open
})
</script>

<template>
  <div
    v-if="show"
    @click.self="hidden"
    class="absolute top-0 left-0 bg-black/20 w-screen h-screen z-10 flex items-center justify-center dark:bg-black/60 backdrop-blur-[1px]"
  >
    <slot></slot>
  </div>
</template>
