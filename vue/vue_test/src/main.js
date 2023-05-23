import { createApp } from "vue";
import App from "./App.vue";
import Counter from './components/Counter.vue'
import AlertBox from './components/AlertBox.vue'
import router from "./router";
const app = createApp(App)

app
.component('Counter',Counter)
.component('AlertBox',AlertBox)
app.use(router)
app.mount("#app")
