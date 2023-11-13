<script setup lang="ts">
interface ButtonOption {
  type?: 'primary' | 'error' | 'info'
}
const { type } = defineProps<ButtonOption>()

const emit = defineEmits(['click'])
const handleClick = (e: Event) => {
  emit('click', e)
}
</script>

<template>
  <button
    class="px-4 py-2 hover:bg-[hsl(215,28%,17%)]/10 rounded-lg transition-all cursor-pointer duration-200 active:scale-95 text-center text-base ease-out dark:hover:bg-slate-400/20 dark:text-slate-400 dark:hover:text-white flex items-center justify-center gap-2"
    :class="type"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.primary {
  @apply bg-primary text-white hover:bg-[#3852b4] dark:text-white dark:bg-[#3852b4] dark:hover:bg-primary;
}
.error {
  @apply bg-red-500 text-white hover:bg-red-600 dark:text-white dark:hover:bg-red-700 dark:bg-red-800;
}
.info {
  @apply bg-black/30 text-white hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/30;
}
</style>
