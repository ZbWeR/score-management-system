<script setup lang="ts">
/**
 * 页面工作流程描述:
 * 进入该页面时,首先会调用接口 /exam/list 获取所有考试列表.
 * 老师可以通过点击 '新建考试' 按钮来新建一个考试,该操作将弹出一个遮罩层.
 * 老师可以通过考试,科目,学号与成绩来进行成绩的导入.
 */
import ViewTitle from '@/components/ViewTitle.vue'
import CustomButton from '@/components/CustomButton.vue'

// 获取已有考试列表
// 新建考试
// 导入成绩
</script>

<template>
  <div class="w-full h-full pl-8 py-8 pr-20">
    <ViewTitle icon="import">导入成绩</ViewTitle>
    <!-- 按钮 -->
    <div class="mt-8">
      <CustomButton type="primary">新建考试</CustomButton>
    </div>
    <div class="flex items-center justify-center mt-4">
      <div class="bg-white rounded py-6 px-10 dark:bg-slate-900 w-1/3">
        <!-- 考试 -->
        <div>
          <h1 class="font-bold text-sm">考试</h1>
          <select class="select dark:bg-slate-800 mt-2 select-bordered w-full">
            <option selected>2023 年八省联考</option>
            <option>2023 泉州三检</option>
            <option>2023 泉州二检</option>
            <option>2023 泉州一检</option>
          </select>
        </div>

        <!-- 科目 -->
        <div class="mt-4">
          <h1 class="font-bold text-sm">科目</h1>
          <select class="select dark:bg-slate-800 mt-2 select-bordered w-full">
            <option selected>语文</option>
            <option>数学</option>
            <option>英语</option>
            <option>物理</option>
            <option>...</option>
          </select>
        </div>

        <!-- 学号 -->
        <div class="mt-4">
          <h1 class="font-bold text-sm">学号</h1>
          <input
            type="text"
            placeholder="请输入 13 位学号"
            class="mt-2 input dark:bg-slate-800 input-bordered w-full"
          />
        </div>

        <!-- 成绩 -->
        <div class="mt-4">
          <h1 class="font-bold text-sm">成绩</h1>
          <input
            type="text"
            placeholder="请输入成绩"
            class="mt-2 input dark:bg-slate-800 input-bordered w-full"
          />
          <label for="absent" class="flex w-full items-center justify-end mt-2">
            <input
              type="checkbox"
              id="absent"
              checked
              class="checkbox checkbox-xs rounded-sm mr-2"
            />
            缺考
          </label>
        </div>

        <!-- 按钮 -->
        <div class="flex gap-8 mt-4">
          <CustomButton class="flex-1" type="info">重置</CustomButton>
          <CustomButton class="flex-1" type="primary">确认</CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>
