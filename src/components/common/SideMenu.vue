<script setup lang="ts">
import { useRouter } from 'vue-router'
import MenuGroup from '@/components/Menu/MenuGroup.vue'
import MenuItem from '@/components/Menu/MenuItem.vue'
import IconUser from '../icons/IconUser.vue'

// 动态菜单
// 从动态路由添加，如果有其他方法，之后再改
// 比如说路由添加一个 meta 字段用来filter过滤，就不需要导入 userRoutesMap 和 useuserStore 了，已经改了
// 添加一个 meta 字段用于指定图标
const menuList = useRouter()
  .getRoutes()
  .filter((r) => r.meta?.toMenu)
  .map((r) => ({
    index: r.path,
    title: r.meta.title
  }))

const iconMap = {
  user: IconUser
}
</script>

<template>
  <div id="side-menu" class="w-60 min-w-fit">
    <div id="side-header" class="flex items-center justify-center h-10 text-white bg-cyan-500">
      🐬成绩管理系统
    </div>

    <div id="menu-items">
      <!-- 路由菜单 -->
      <MenuGroup :default-active="$route.path" router>
        <MenuItem v-for="(m, idx) in menuList" :key="idx" :index="m.index" :route="m.index">
          <!-- 由于没有图标字段，先用这个图标代替 -->
          <component :is="iconMap['user']" class="mr-2" />
          {{ m.title }}
        </MenuItem>
      </MenuGroup>
    </div>

    <div id="side-footer">
      <!-- TODO: 底部固定菜单-->
    </div>
  </div>
</template>

<style scoped></style>
