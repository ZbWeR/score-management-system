import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import IconSvgVue from './components/IconSvg.vue'

import App from './App.vue'
import router from './router'

import '@/assets/style/Tailwind.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.component('IconSvg', IconSvgVue)

app.mount('#app')
