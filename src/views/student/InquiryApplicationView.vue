<script setup lang="ts">
/**
 * 页面工作流程描述:
 * 当进入该页面时,将会调用 /check_score/list/student 获取当前学生的申请列表,若不存在则显示 '当前暂无查分申请'
 * 学生可以通过点击 '新建申请' 来新建一个查分申请，该操作将弹出一个遮罩层.
 * 遮罩层中包含一个表单,表单中包含一个 '考试' 选择框和一个 '科目' 选择框,学生选择后点击 '申请查分' 按钮将会调用 /check_score/create 接口来创建一个新的申请.
 * 点击遮罩层之外可以关闭遮罩层.
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

// 新建查分申请
const createApplication = () => {
  // TODO:
  // 1. 调用 /check_score/create 创建表单
  // 2. 关闭遮罩,显示接口返回信息,success.
  // 3. 调用 /check_score/list/student 或刷新页面获取最新申请列表.
}
</script>

<template>
  <div class="w-full h-full pl-8 py-8 pr-20">
    <ViewTitle icon="apply-title">申请查分</ViewTitle>
    <!-- 按钮 -->
    <div class="mt-8">
      <CustomButton type="primary" @click="openInputForm">新建申请</CustomButton>
    </div>
    <!-- 表格 -->
    <div class="w-full">
      <div class="mt-6 bg-white w-1/2 rounded shadow dark:bg-slate-900 dark:shadow-transparent">
        <h1 class="p-2 pl-3 border-b text-lg font-bold dark:border-white/20 tracking-wider">
          📝 我的申请
        </h1>
        <div class="overflow-x-auto px-4 py-6">
          <table class="table rounded-sm">
            <thead class="bg-p-2/90 dark:text-white dark:bg-slate-800/50 text-black text-sm">
              <tr class="border-none">
                <th>考试</th>
                <th>科目</th>
                <th>申请状态</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-p-0 dark:bg-slate-700 border-none">
                <td>2023 年八省联考</td>
                <td>数学</td>
                <td>申请中</td>
              </tr>
              <tr class="bg-p-2/40 dark:bg-slate-800 border-none">
                <td>2023 年八省联考</td>
                <td>英语</td>
                <td>拒绝</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- 遮罩层 -->
    <CustomDialog ref="dialog">
      <div class="bg-white rounded-2xl py-6 px-10 dark:bg-slate-800">
        <h1 class="text-center text-xl font-bold tracking-widest">新建查分申请</h1>
        <select class="select dark:bg-slate-900 mt-10 select-bordered w-full max-w-xs">
          <option selected>2023 年八省联考</option>
          <option>2023 泉州三检</option>
          <option>2023 泉州二检</option>
          <option>2023 泉州一检</option>
        </select>

        <select class="select mt-6 dark:bg-slate-900 select-bordered w-full max-w-xs">
          <option selected>语文</option>
          <option>数学</option>
          <option>英语</option>
          <option>物理</option>
          <option>化学</option>
          <option>生物</option>
        </select>

        <CustomButton class="mt-10 w-full" type="primary" @click="createApplication"
          >申请查分</CustomButton
        >
      </div>
    </CustomDialog>
  </div>
</template>
