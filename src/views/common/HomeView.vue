<script setup lang="ts">
import { ref } from 'vue'
import { getScore } from '@/request/API/student'

// 401 测试
const examInfo = ref('')
async function RequestScore(type: string = '') {
  const res = await getScore(2018210000, type)
  res && (examInfo.value = res.exam_info)
}
</script>

<style scoped>
.btn-info,
.btn-error {
  @apply hover:text-white !important;
}
</style>

<template>
  <div class="bg-zinc-50 w-screen h-screen flex items-center justify-center">
    <div class="bg-white shadow-md p-4 rounded-md">
      <h1 class="text-xl">Test</h1>
      <div class="mt-4">
        <button class="btn btn-info btn-outline" @click="RequestScore('')">查询分数</button>
        <button class="btn btn-error btn-outline ml-4" @click="RequestScore('401')">
          查询分数(返回值为 401)
        </button>
      </div>
      <div class="mt-4 alert" v-if="examInfo">Exam Info: {{ examInfo }}</div>
    </div>
  </div>
</template>
