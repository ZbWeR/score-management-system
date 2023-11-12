<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import router from '@/router'
import { useUserStore } from '../stores/user'

// 根据用户类型获取路由列表
const routeList = useRouter()
  .getRoutes()
  .filter((r) => r.meta?.toMenu)
const activeIndex = ref(0)

// 切换路由
const toggleView = (target: string, index: number) => {
  activeIndex.value = index
  router.push({ path: target })
}

// !临时代码,用于调试
// 获取用户信息
const state = useUserStore()
const logout = () => {
  state.logout() // 清除用户信息
  router.push({ path: '/auth' }) // 跳转登录页面
}
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <!-- 页面主体内容 -->
    <div class="drawer-content bg-zinc-50 flex flex-col items-center justify-center">
      <!-- TODO: 移动端按钮样式调整 -->
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      <div class="bg-white p-4 rounded-md shadow-md mb-4">
        当前角色: {{ state.role }}
        <button @click="logout" class="mt-4 btn block mx-auto">退出登录</button>
      </div>
      <router-view />
    </div>

    <!-- 侧边栏 -->
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <h1
        class="tracking-wider font-bold text-white text-xl flex w-full justify-center p-4 bg-primary cursor-context-menu"
      >
        🐋成绩管理系统
      </h1>
      <ul class="flex-1 menu p-4 w-60 bg-base-200 text-base-content">
        <li v-for="(route, index) in routeList" :key="route.path" class="mb-2">
          <button
            @click="toggleView(route.path, index)"
            class="navbar-btn"
            :class="
              index === activeIndex
                ? 'pointer-events-none hover:bg-p-2 hover:text-p-t bg-p-2 text-p-t'
                : ''
            "
          >
            {{ route.meta?.title }}
          </button>
        </li>
      </ul>
      <!-- TODO:底部功能按钮 -->
      <ul class="w-full bg-base-200 menu hidden">
        <li><button class="navbar-btn">切换主题</button></li>
        <li><button class="navbar-btn">退出登录</button></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.navbar-btn {
  @apply text-center text-base block focus:bg-p-2 focus:text-p-t !important;
}
.drawer-side {
  @apply flex flex-col !important;
}
</style>
