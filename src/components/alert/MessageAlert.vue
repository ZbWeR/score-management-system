<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { type MessageOption } from './index'

const {
  message = '你忘记填写 message 啦！',
  duration = 3000,
  type = 'default'
} = defineProps<MessageOption>()

// 展示一段时间后自动隐藏
const visible = ref(false)
const isTransitioning = ref(false)
let timeoutId: number | null = null
const show = () => {
  if (isTransitioning.value) return
  visible.value = true
  if (timeoutId) clearTimeout(timeoutId)
  timeoutId = window.setTimeout(() => {
    visible.value = false
    isTransitioning.value = true
  }, duration)
}
onMounted(show)

// 组件卸载时清除定时器
const clearTimer = () => {
  timeoutId && clearTimeout(timeoutId)
}
onUnmounted(clearTimer)

// 根据 type 计算样式
const getClassFromType = () => {
  switch (type) {
    case 'success':
      return 'bg-emerald-400 text-white'
    case 'error':
      return 'bg-red-400 text-white'
    default:
      return ''
  }
}
const typeClass = getClassFromType()
</script>

<template>
  <!-- TODO: 暗黑模式样式与响应式 -->
  <transition name="fade">
    <div
      v-if="visible"
      @mouseenter="clearTimer"
      @mouseleave="show"
      class="alert top-6 shadow-md = bg-opacity-90 border-none h-14"
      :class="typeClass"
    >
      <!-- success -->
      <svg
        v-if="type === 'success'"
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <!-- error -->
      <svg
        v-else-if="type === 'error'"
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <!-- 默认 -->
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-info shrink-0 w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>

      <span class="line-clamp-1">{{ message }}</span>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-300;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0 -translate-y-4;
}
</style>
