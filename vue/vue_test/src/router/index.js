import { createRouter,createWebHistory } from 'vue-router'
import Home from "../components/Home.vue"
import TestSolt from "../components/solt/TestSolt.vue"
import TestInject from "../components/inject/TestInject.vue"
import TestComposition from "../components/composition/TestComposition.vue"
import TestRef from "../components/composition/TestRef.vue"
import TestComputed from "../components/composition/TestComputed.vue"
import CompositionFun from "../components/composition/CompositionFun.vue"
import TestUseFetch from "../components/composition/TestUseFetch.vue"
import CustomDirectives from "../components/directives/CustomDirectives.vue"
import TestPlugin from "../components/testPlugin/TestPlugin.vue"
import TestTransition from "../components/transition/TestTransition.vue"
const routes = [
    { path:'/home', component: Home},
    { path:'/testsolt',component: TestSolt},
    { path:'/inject',component: TestInject},
    { path:'/composition',component: TestComposition},
    { path:'/ref',component:TestRef},
    { path:'/computed',component:TestComputed},
    { path:'/mouse',component:CompositionFun},
    { path:'/fetch',component:TestUseFetch},
    { path:'/cd',component:CustomDirectives},
    { path:'/plugin',component:TestPlugin},
    { path:'/trans',component:TestTransition}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router