<script setup lang="ts">
import { onMounted } from 'vue'
import { testFail, testSuccess } from '../request/API/test'

onMounted(async () => {
  await testSuccess({ name: 'test', age: 18 }, { authRequire: true })
  await testFail({ name: 'test', age: 18 }, { authRequire: true })
})
</script>

<template>
  <h1 class="m-8 mb-5 text-3xl font-bold underline">Hello world!</h1>
  <div class="p-2 px-6 ml-6 font-bold text-white bg-blue-500 rounded-lg w-fit">
    添加了 Tailwind CSS
  </div>
</template>
