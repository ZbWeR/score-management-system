<script setup lang="ts">
import { inject, computed } from 'vue'
import { type RouteLocationRaw } from 'vue-router'
import type { MenuProvider } from './MenuGroup.vue'
import IconUser from '../icons/IconUser.vue'

/* 组件参数
  index: string - 菜单项的 index，跟ElementUI一样，建议设置成 router path (如果是用作路由菜单)
  route: RouteLocationRaw - 跟router.push接受的参数一样，用于路由跳转
  disabled: boolean - 是否禁用
*/
interface IProps {
  index: string
  route?: RouteLocationRaw
  disabled?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  disabled: false
})

export interface MenuItem {
  index: string
  route?: RouteLocationRaw
}

/* 组件事件
  click: (item: MenuItem) => void - 点击菜单项时触发，用于触发用户自定义的 click 事件 (如果有)
*/
interface IEmits {
  (e: 'click', item: MenuItem): void
}

const emits = defineEmits<IEmits>()

// 注入根菜单组件
const rootMenu = inject<MenuProvider>('rootMenu')
// MenuItem不能单独使用，必须包裹在MenuGroup里面
if (!rootMenu) {
  throw new Error(
    'Cannot inject rootMenu. Please make sure you have wrapped your menu items with <MenuGroup> component'
  )
}

// 当前菜单项是否激活
const isActive = computed(() => rootMenu?.activeIndex === props.index)

// 默认点击事件处理函数
const handleClick = () => {
  if (props.disabled) return
  if (rootMenu) rootMenu.handleMenuItemClick(props)
  // 触发用户自定义的 click 事件 (如果有)
  emits('click', {
    index: props.index,
    route: props.route
  })
}
</script>

<template>
  <div
    @click="handleClick"
    :class="{
      'is-active': isActive,
      'is-disabled': props.disabled
    }"
    class="flex items-center w-full h-12 px-3 text-lg text-black transition-colors duration-300 cursor-pointer active:bg-indigo-200 hover:bg-indigo-100"
  >
    <slot>
      <!-- 插槽，在这里放菜单项展示的内容 -->
      <IconUser class="mr-3" />
      <span>默认内容</span>
    </slot>
  </div>
</template>

<style scoped>
/* TODO: 适配 dark mode */
.is-active {
  @apply bg-indigo-200 text-indigo-700 !important;
}
.is-disabled {
  @apply opacity-40 cursor-not-allowed !important;
}
</style>
