import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import './assets/main.css'
import './assets/css/reset.css'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/fonts/iconfont.css'
const app = createApp(App)

app.use(router)
app.use(VueAwesomeSwiper)

app.mount('#app')

fastclick.attach('document.body')

App.prototype.$axios = axios