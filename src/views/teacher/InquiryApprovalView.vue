<script setup lang="ts">
/**
 * 页面工作流程描述:
 * 进入该页面时,会调用接口 /check_score/list/teacher 获取所有申请.
 * 老师可以通过点击 '一键驳回' 按钮来驳回所有申请.
 * 也可以通过申请表格中每条记录右侧的按钮来受理或者驳回.
 * 处理申请时将会调用 /check_score/approve 接口
 */
import ViewTitle from '@/components/ViewTitle.vue'
import CustomButton from '@/components/CustomButton.vue'

// 获取已有申请列表(分页&查询)
// 一键驳回
// 受理/驳回申请
</script>

<template>
  <div class="w-full h-screen overflow-hidden pl-8 py-8 pr-20">
    <ViewTitle icon="check">查分审批</ViewTitle>

    <div class="mt-4 bg-white w-full rounded shadow dark:bg-slate-900 dark:shadow-transparent">
      <!-- 标题 -->
      <div class="px-3 py-4 flex justify-between items-center border-b dark:border-white/10">
        <h1 class="text-xl font-bold">📝 查分申请</h1>

        <div class="flex gap-8">
          <div class="h-10 border overflow-hidden border-black/20 rounded-md flex items-center">
            <input
              class="dark:bg-slate-800 p-2 px-4 outline-none"
              type="text"
              placeholder="输入关键词进行检索"
            />
            <div
              class="bg-primary h-10 rounded-md w-10 flex items-center justify-center text-white"
            >
              <IconSvg icon="apply-title" size="24" />
            </div>
          </div>
          <CustomButton type="error" size="small">一键驳回</CustomButton>
        </div>
      </div>
      <!-- 列表 -->
      <div class="overflow-x-auto px-4 py-6">
        <table class="table rounded-sm">
          <thead class="bg-p-2/90 dark:text-white dark:bg-slate-800/50 text-black text-sm">
            <tr class="border-none text-center">
              <th>学号</th>
              <th>姓名</th>
              <th>考试</th>
              <th>申请科目</th>
              <th>目前得分</th>
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
              <td>2023年八省联考</td>
              <td>语文</td>
              <td>{{ Math.floor(Math.random() * 100) + 1 }}</td>
              <td class="flex gap-4 items-center justify-center">
                <CustomButton type="primary" size="small">受理</CustomButton>
                <CustomButton type="error" size="small">驳回</CustomButton>
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
  </div>
</template>

<style scoped>
.table td {
  @apply py-1 !important;
}
</style>
