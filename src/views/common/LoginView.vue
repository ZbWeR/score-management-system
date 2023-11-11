<script setup lang="ts">
// TODO: 按钮防抖节流
import { ref, computed } from 'vue'

import { useUserStore } from '@/stores'
import { userLogin } from '@/request/API/common'
import router from '@/router'
import { messageManager } from '@/components/alert'

import IconUser from '@/components/icons/IconUser.vue'
import IconPassword from '@/components/icons/IconPassword.vue'
import { resetRouter } from '../../router/index'

const userStore = useUserStore()

// 登录请求
const account = ref('')
const password = ref('')
const RequestLogin = async () => {
  if (!isValidate.value) return
  const type = account.value === 'fail' ? 'fail' : ''
  const res = await userLogin(account.value, password.value, type)
  if (res) {
    // 覆写 token 与用户信息
    userStore.setToken(res.token)
    userStore.setInfo(res.user_id, res.role)
    messageManager.showMessage({ message: '登录成功!', type: 'success' })
    router.push({ name: 'home', replace: true })
  } else {
    console.log('登录失败')
  }
}
// 判断输入数据是否合法
const isValidate = computed(() => {
  return password.value.length > 0 && account.value.length > 0
})

// 密码框数据非法时调整样式
const passwordInputClass = ref('focus-within:shadow-[0_0_0_2px_#38bdf8]')
const blurValidate = () => {
  if (password.value.length > 0) {
    passwordInputClass.value = 'shadow-none focus-within:shadow-[0_0_0_2px_#38bdf8]'
  } else {
    passwordInputClass.value = 'shadow-[0_0_0_2px_#f87171]'
  }
}

// TODO：记住账号功能
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <!-- ? 背景图片 change -->
    <img
      class="absolute -z-10 h-full object-cover"
      src="@/assets/img/login-background.png"
      alt=""
    />
    <div
      class="bg-white sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] w-full flex flex-col items-center justify-center rounded-md pt-14 pb-10"
    >
      <h1 class="text-4xl">🎯 登录账户🎉</h1>
      <div class="mt-12 w-full flex flex-col items-center">
        <div
          class="w-2/3 box-content border border-[rgb(226,229,240)] rounded-lg h-10 flex items-center p-1 transition-all duration-200 hover:border-[rgb(171,172,179)] focus-within:shadow-[0_0_0_2px_#38bdf8] focus-within:bg-sky-50 group"
        >
          <div class="flex items-center w-full">
            <IconUser class="w-6 h-6 ml-2 mr-3 group-focus-within:fill-black fill-black/30" />
            <input
              class="outline-none bg-transparent w-full text-zinc-800 placeholder:text-gray-400 text-lg leading-[1.5rem]"
              type="text"
              v-model="account"
              placeholder="请输入学工号"
            />
          </div>
        </div>
        <div
          class="mt-6 w-2/3 box-content border border-[rgb(226,229,240)] rounded-lg h-10 flex items-center p-1 transition-all duration-200 hover:border-[rgb(171,172,179)] focus-within:bg-sky-50 group"
          :class="passwordInputClass"
        >
          <div class="flex items-center w-full">
            <IconPassword class="w-6 h-6 ml-2 mr-3 group-focus-within:fill-black fill-black/30" />
            <input
              class="outline-none bg-transparent w-full text-zinc-800 placeholder:text-gray-400 text-lg leading-[1.5rem]"
              type="password"
              v-model="password"
              @blur="blurValidate"
              placeholder="请输入密码"
            />
          </div>
        </div>
        <div class="mt-4 w-2/3">
          <label class="flex items-center cursor-pointer flex-row-reverse gap-2">
            <span class="label-text">记住账号</span>
            <input type="checkbox" class="checkbox checkbox-sm rounded" />
          </label>
        </div>
      </div>
      <button
        class="btn hover:bg-[#3e63dd] hover:text-white w-1/3 mt-8 text-lg"
        :disabled="!isValidate"
        @click="RequestLogin()"
      >
        登 &nbsp; 录
      </button>
      <!-- 调试说明 -->
      <div class="border-t border-black/10 w-4/5 px-4 mt-5 pt-5 text-black/30">
        <p>Student | 账号 stu 密码 stu</p>
        <p>Teacher | 账号 admin 密码 admin</p>
      </div>
    </div>
  </div>
</template>
