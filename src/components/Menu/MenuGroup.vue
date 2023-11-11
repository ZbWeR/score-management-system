<script setup lang="ts">
import { provide, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { MenuItem } from './MenuItem.vue'

/* 组件参数
  defaultActive: string - 默认激活的菜单项的 index
  router: boolean - 是否开启路由菜单模式
*/
interface IProps {
  defaultActive?: string
  router?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  defaultActive: '',
  router: false
})

// eslint-disable-next-line vue/no-dupe-keys
// 如果启用路由菜单模式，加载 router 实例，
// 否则为 null，应该能提高性能吧:(
const router = props.router ? useRouter() : null
// 当前激活的菜单项 index
const activeIndex = ref(props.defaultActive)
// 处理菜单项点击事件
const handleMenuItemClick = (item: MenuItem) => {
  if (props.router && item.route && router) {
    router.push(item.route).then((res) => {
      if (!res) activeIndex.value = item.index
    })
  }
  // 非路由模式啥也不做，提高组件灵活性
  // 比如可以作按钮菜单，用户自己处理点击事件
}

/* MenuProvider 给MenuItem提供了一些数据和方法
  activeIndex: string - 当前激活的菜单项 index
  handleMenuItemClick: (item: MenuItem) => void - 处理菜单项点击事件
*/
export interface MenuProvider {
  activeIndex: string
  handleMenuItemClick: (item: MenuItem) => void
}

provide<MenuProvider>(
  'rootMenu',
  reactive({
    activeIndex,
    handleMenuItemClick
  })
)
</script>

<template>
  <slot></slot>
</template>
