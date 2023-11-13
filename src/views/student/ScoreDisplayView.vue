<script setup lang="ts">
import ViewTitle from '@/components/ViewTitle.vue'
</script>

<template>
  <!-- ? 考虑增加方格背景 -->
  <div class="w-full h-full pl-8 py-8 pr-20">
    <div class="flex justify-between">
      <ViewTitle icon="score">成绩查询</ViewTitle>
      <select class="select custom-select">
        <option selected>2023 年八省联考</option>
        <option>2023 泉州三检</option>
        <option>2023 泉州二检</option>
        <option>2023 泉州一检</option>
      </select>
    </div>

    <!-- 看板 -->
    <div class="mt-8 flex justify-between">
      <div
        class="w-72 dark:bg-slate-900 dark:border-transparent dark:shadow-slate-500 bg-white rounded-md border shadow overflow-hidden"
      >
        <h1
          class="pt-3 pl-3 pb-2 dark:shadow-[0px_0px_1px_1px_rgba(255,255,255,0.2)] shadow-[0px_0px_1px_1px_rgba(0,0,0,.08)]"
        >
          🏅 年段排名
        </h1>
        <div class="flex flex-col items-center pb-6 pt-6">
          <div class="relative">
            <h1 class="text-7xl text-sky-400 mr-1">64</h1>
            <p class="text-black/30 absolute bottom-0 -right-8">/357</p>
          </div>
          <p class="mt-2 text-xl text-sky-400">年段排名</p>
        </div>
      </div>

      <div
        class="w-72 dark:bg-slate-900 dark:border-transparent dark:shadow-slate-500 bg-white rounded-md border shadow overflow-hidden"
      >
        <h1
          class="pt-3 pl-3 pb-2 dark:shadow-[0px_0px_1px_1px_rgba(255,255,255,0.2)] shadow-[0px_0px_1px_1px_rgba(0,0,0,.08)]"
        >
          🎯 班级排名
        </h1>
        <div class="flex flex-col items-center pb-6 pt-6">
          <div class="relative">
            <h1 class="text-7xl text-green-400 mr-1">23</h1>
            <p class="text-black/30 absolute bottom-0 -right-8">/41</p>
          </div>
          <p class="mt-2 text-xl text-green-400">班级排名</p>
        </div>
      </div>

      <div
        class="w-72 dark:bg-slate-900 dark:border-transparent dark:shadow-slate-500 bg-white rounded-md border shadow overflow-hidden"
      >
        <h1
          class="pt-3 pl-3 pb-2 dark:shadow-[0px_0px_1px_1px_rgba(255,255,255,0.2)] shadow-[0px_0px_1px_1px_rgba(0,0,0,.08)]"
        >
          🎉 我的总分
        </h1>
        <div class="flex flex-col items-center pb-6 pt-6">
          <div class="relative">
            <h1 class="text-7xl text-orange-400 mr-1">650</h1>
            <p class="text-black/30 absolute bottom-0 -right-8">/750</p>
          </div>
          <p class="mt-2 text-xl text-orange-400">我的总分</p>
        </div>
      </div>
    </div>
    <!-- 成绩详情 -->
    <div class="mt-6 bg-white w-full rounded shadow dark:bg-slate-900 dark:shadow-transparent">
      <h1 class="p-2 pl-3 border-b text-lg font-bold dark:border-white/20">📚 成绩详情</h1>
      <div class="overflow-x-auto px-4 py-6">
        <table class="table rounded-sm">
          <thead class="bg-p-2/90 dark:text-white dark:bg-slate-800/50 text-black text-sm">
            <tr class="border-none">
              <th>科目</th>
              <th>语文</th>
              <th>数学</th>
              <th>英语</th>
              <th>物理</th>
              <th>化学</th>
              <th>生物</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-p-0 dark:bg-slate-700 border-none">
              <td>单科排名</td>
              <td>1</td>
              <td>56</td>
              <td>12</td>
              <td>16</td>
              <td>--</td>
              <td>123</td>
            </tr>
            <tr class="bg-p-2/40 dark:bg-slate-800 border-none">
              <td>单科成绩</td>
              <td>140/150</td>
              <td>90/150</td>
              <td>135/150</td>
              <td>90/100</td>
              <td>缺考</td>
              <td>50/100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- TODO:数据分析 (估计不会做了) -->
  </div>
</template>

<style scoped>
.custom-select {
  @apply border-primary text-sm h-auto min-h-fit bg-p-0 text-p-t dark:bg-slate-900 dark:text-white dark:border-white/20 !important;
}
.custom-select option {
  @apply text-black dark:text-white !important;
}
</style>
