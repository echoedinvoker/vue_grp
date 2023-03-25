import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

axios.defaults.baseURL = 'http://localhost:8000/api/ambassador/'
axios.defaults.withCredentials = true;

createApp(App).use(router).mount('#app')

