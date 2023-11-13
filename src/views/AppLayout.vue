<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import { useUserStore } from '../stores/user'
import { resetRouter } from '../router/index'

// 根据用户类型获取路由列表
const router = useRouter()
const routeList = router.getRoutes().filter((r) => r.meta?.toMenu)

// 获取当前激活路由
const activeIndex = ref(0)
const getActiveIndex = () => {
  const path = router.currentRoute.value.path
  const index = routeList.findIndex((r) => r.path === path)
  activeIndex.value = index
}
watch(() => router.currentRoute.value.path, getActiveIndex)
onMounted(getActiveIndex)

// 切换路由
const toggleView = (target: string, index: number) => {
  activeIndex.value = index
  router.push({ path: target })
}

// 退出登录
const state = useUserStore()
const logout = () => {
  state.logout() // 清除用户信息
  resetRouter() // ?重置路由
  router.replace({ path: '/auth' }) // 跳转登录页面
}

// 切换主题
const toggleTheme = () => {
  if (state.theme === 'light') state.setTheme('dark')
  else state.setTheme('light')
  getTheme()
}
const getTheme = () => {
  if (state.theme === 'dark') document.documentElement.classList.add('dark')
  else document.documentElement.classList.remove('dark')
}
onMounted(getTheme)
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <!-- 页面主体内容 -->
    <div
      class="drawer-content transition-all duration-200 dark:bg-slate-800 dark:text-white bg-base-200 flex flex-col items-center justify-center"
    >
      <!-- TODO: 移动端按钮样式调整 -->
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      <router-view />
    </div>

    <!-- 侧边栏 -->
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <h1
        class="tracking-wider font-bold hidden text-white text-xl lg:flex justify-center p-4 bg-primary cursor-context-menu w-60"
      >
        🐋成绩管理系统
      </h1>
      <ul
        class="flex-1 dark:bg-slate-900/95 dark:text-white justify-between menu p-4 w-60 bg-white text-base-content"
      >
        <!-- 路由列表 -->
        <div>
          <div v-for="(route, index) in routeList" :key="route.path" class="mb-2">
            <button
              @click="toggleView(route.path, index)"
              class="custom-navbar-btn"
              :class="index === activeIndex ? 'custom-navbar-btn-active' : ''"
            >
              <IconSvg :icon="route.meta?.icon" size="20" />
              {{ route.meta?.title }}
            </button>
          </div>
        </div>
        <!-- 底部功能按钮 -->
        <div class="border-t-2 border-black/5 pt-4">
          <button class="custom-navbar-btn" @click="toggleTheme">
            <IconSvg :icon="state.theme === 'dark' ? 'light' : 'dark'" size="20" />
            切换主题
          </button>
          <button class="custom-navbar-btn" @click="logout">
            <IconSvg icon="exit" size="20" />
            退出登录
          </button>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.custom-navbar-btn {
  @apply px-4 py-2 hover:bg-[hsl(215,28%,17%)]/10 rounded-lg transition-all cursor-pointer duration-200 active:scale-95 text-center text-base  w-full ease-out dark:hover:bg-slate-400/20 dark:text-slate-400 dark:hover:text-white flex items-center justify-center gap-2;
}
.custom-navbar-btn-active {
  @apply pointer-events-none hover:bg-p-2 hover:text-p-t bg-p-2 text-p-t dark:bg-indigo-200/40 dark:text-white;
}
.drawer-side {
  @apply lg:flex lg:flex-col !important;
}
</style>
