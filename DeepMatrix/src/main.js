import './assets/main.css'

import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

// dark mode
import { useDark } from '@vueuse/core'
const isDark = useDark();

// Set isDark based on localStorage or default to false
isDark.value = localStorage.getItem('darkMode') === 'true' ? true : false;

// Watch for changes to isDark and save to localStorage (web storage)
watch(isDark, (newValue) => {
  localStorage.setItem('darkMode', newValue.toString());
});

// Provide the isDark ref to the entire app, so SettingsView can access it
app.provide('isDark', isDark)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
