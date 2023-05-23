import { createApp } from "vue";
import App from "./App.vue";
import Counter from './components/Counter.vue'
import AlertBox from './components/AlertBox.vue'
import router from "./router";
import i18nPlugin from './components/testPlugin/i18n'
import animate from 'animate.css'
const app = createApp(App)

app
.component('Counter',Counter)
.component('AlertBox',AlertBox)
app.use(router)
app.mount("#app")

app.use(i18nPlugin,{
    greetings: {
        hello: 'Bonjour'
    }
})

app.use(animate)