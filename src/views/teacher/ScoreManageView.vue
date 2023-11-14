<script setup lang="ts">
/**
 * 页面工作流程描述:
 * 进入该页面时,首先会调用接口 /score/list 获取所有学生的基本信息,并将其渲染到表格中.
 * 表格中存在 '操作' 一栏,可以对学生的成绩信息进行 '更新' 与 '删除'
 * 点击 '更新' 按钮将会打开一个遮罩层,并接口获取学生的具体成绩信息.
 * 随后,老师可以对学生的成绩进行修改.
 * 点击 '删除' 按钮将会弹出一个确认框,确认后将会删除该学生的成绩信息.
 */
import { ref } from 'vue'
import ViewTitle from '@/components/ViewTitle.vue'
import CustomButton from '@/components/CustomButton.vue'
import CustomDialog from '@/components/CustomDialog.vue'

// 遮罩层
type DialogRef = InstanceType<typeof CustomDialog>
const dialog = ref<null | DialogRef>(null)
const openInputForm = () => {
  dialog.value?.openDialog()
}

// 获取所有学生基本信息
// 根据学生 id 获取具体成绩信息
// 修改成绩信息
// 删除成绩
</script>

<template>
  <div class="w-full h-full pl-8 py-8 pr-20">
    <!-- 标题 -->
    <div class="flex justify-between">
      <ViewTitle icon="manage">成绩管理</ViewTitle>
      <select class="select custom-select">
        <option selected>2023 年八省联考</option>
        <option>2023 泉州三检</option>
        <option>2023 泉州二检</option>
        <option>2023 泉州一检</option>
      </select>
    </div>
    <!-- 数据表单 -->
    <div class="mt-4 bg-white w-full rounded shadow dark:bg-slate-900 dark:shadow-transparent">
      <!-- 标题 -->
      <div class="px-3 py-4 flex justify-between items-center border-b dark:border-white/10">
        <h1 class="text-xl font-bold">📝 查分申请</h1>
        <div class="h-10 border overflow-hidden border-black/20 rounded-md flex items-center">
          <input
            class="dark:bg-slate-800 p-2 px-4 outline-none"
            type="text"
            placeholder="输入关键词进行检索"
          />
          <div class="bg-primary h-10 rounded-md w-10 flex items-center justify-center text-white">
            <IconSvg icon="apply-title" size="24" />
          </div>
        </div>
      </div>
      <!-- 列表 -->
      <div class="overflow-x-auto px-4 py-6">
        <table class="table rounded-sm">
          <thead class="bg-p-2/90 dark:text-white dark:bg-slate-800/50 text-black text-sm">
            <tr class="border-none text-center">
              <th>学号</th>
              <th>姓名</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center border-none"
              :class="i % 2 ? 'bg-p-0 dark:bg-slate-700' : 'bg-p-2/40 dark:bg-slate-800'"
              v-for="i in 10"
              :key="i"
            >
              <td>202102091000{{ i }}</td>
              <td>张三</td>
              <td class="flex gap-4 items-center justify-center">
                <CustomButton type="primary" size="small" @click="openInputForm">更新</CustomButton>
                <CustomButton type="error" size="small">删除</CustomButton>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 分页 -->
        <div class="flex justify-center mt-4">
          <nav aria-label="Pagination">
            <ul class="inline-flex items-center -space-x-px rounded-md text-sm shadow-sm">
              <li>
                <a
                  href="#"
                  class="dark:bg-white/20 dark:hover:bg-white/25 dark:border-white/10 dark:text-white inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 font-medium text-gray-500 hover:bg-gray-50"
                >
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  class="dark:bg-white/[0.35] dark:pointer-events-none dark:border-white/10 dark:text-white z-10 inline-flex items-center border border-gray-300 bg-gray-100 px-4 py-2 font-medium text-gray-700"
                  >1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:bg-gray-50 dark:bg-white/20 dark:hover:bg-white/25 dark:border-white/10 dark:text-white"
                  >2
                </a>
              </li>
              <li>
                <span
                  class="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-gray-700 dark:bg-white/20 dark:hover:bg-white/25 dark:border-white/10 dark:text-white"
                  >...
                </span>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:bg-gray-50 dark:bg-white/20 dark:hover:bg-white/25 dark:border-white/10 dark:text-white"
                  >9
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:bg-gray-50 dark:bg-white/20 dark:hover:bg-white/25 dark:border-white/10 dark:text-white"
                  >10
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 font-medium text-gray-500 hover:bg-gray-50 dark:bg-white/20 dark:hover:bg-white/25 dark:border-white/10 dark:text-white"
                >
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <CustomDialog ref="dialog">
      <!-- TODO:学生具体信息 -->
    </CustomDialog>
  </div>
</template>

<style scoped>
.custom-select {
  @apply border-primary text-sm h-auto min-h-fit bg-p-0 text-p-t dark:bg-slate-900 dark:text-white dark:border-white/20 !important;
}
.custom-select option {
  @apply text-black dark:text-white !important;
}

.table td {
  @apply py-1 !important;
}
</style>
