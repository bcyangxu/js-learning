import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import AlertBox from './components/level1/AlertBox.vue'
import SussBox from './components/level2/SussBox.vue'
const app = createApp(App)
app.use(router)
app.mount('#app')

app
.component('AlertBox',AlertBox)
.component('SussBox',SussBox)