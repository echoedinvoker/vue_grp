import axios from 'axios'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

axios.defaults.baseURL = 'http://localhost:8000/api/ambassador/'
axios.defaults.withCredentials = true;

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')

