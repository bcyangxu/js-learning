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
    },{
        path: '/reactive',
        component: () => import('../components/level1/ReactiveDemo.vue')
    },{
        path: '/toref',
        component: () => import('../components/level1/ToRef.vue')
    },{
        path: '/computed',
        component: () => import('../components/level1/ComputedDemo.vue')
    },{
        path: '/shop',
        component: () => import('../components/level1/ShopCar.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

