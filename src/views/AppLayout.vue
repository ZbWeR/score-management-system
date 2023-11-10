<script setup lang="ts">
import SideMenu from '@/components/common/SideMenu.vue'
</script>

<template>
  <div id="app-layout" class="flex w-screen h-screen">
    <!-- 
      将侧边菜单栏的内容放在左右两侧
     -->
    <div class="flex-none side-menu-container">
      <!-- 
        侧边栏，使用 flex-none 固定宽度
       -->
      <SideMenu />
    </div>
    <div id="main-container" class="flex-row flex-1 bg-zinc-50">
      <!-- 
        二级 router-view，用于包含 APP 的业务内容
        背景色为浅灰色，自动占满剩余空间
        使用 flex-row 子元素垂直排列，与 HTML 默认语义一致
        如有高级布局需求，可以在 view 中再嵌套一层 div
      -->
      <router-view />
    </div>
  </div>
</template>
