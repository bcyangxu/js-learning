import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/syntax',
        component: () => import('../components/level1/TemplateSyntax.vue')
    },{
        path: '/vd',
        component: () => import('../components/level1/VirtualDom.vue')
    },{
        path: '/ref',
        component: () => import('../components/level1/RefDemo.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

