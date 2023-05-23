import { createRouter,createWebHistory } from 'vue-router'
import Home from "../components/Home.vue"
import TestSolt from "../components/solt/TestSolt.vue"
import TestInject from "../components/inject/TestInject.vue"
import TestComposition from "../components/composition/TestComposition.vue"
import TestRef from "../components/composition/TestRef.vue"
import TestComputed from "../components/composition/TestComputed.vue"
import CompositionFun from "../components/composition/CompositionFun.vue"
import TestUseFetch from "../components/composition/TestUseFetch.vue"
const routes = [
    { path:'/home', component: Home},
    { path:'/testsolt',component: TestSolt},
    { path:'/inject',component: TestInject},
    { path:'/composition',component: TestComposition},
    { path:'/ref',component:TestRef},
    { path:'/computed',component:TestComputed},
    { path:'/mouse',component:CompositionFun},
    { path:'/fetch',component:TestUseFetch}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router