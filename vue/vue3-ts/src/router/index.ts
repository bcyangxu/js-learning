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
    },
    {
        path: '/watch',
        component: () => import('../components/level1/WatchDemo.vue')
    },
    {
        path: '/class',
        component: () => import('../components/level1/ClassAndStyle.vue')
    },
    {
        path: '/if',
        component: () => import('../components/level1/IfDemo.vue')
    },
    {
        path: '/for',
        component: () => import('../components/level1/ForDemo.vue')
    },
    {
        path: '/event',
        component: () => import('../components/level1/EventDemo.vue')
    },
    {
        path: '/form',
        component: () => import('../components/level1/FormDemo.vue')
    },
    {
        path: '/form2',
        component: () => import('../components/level1/FormDemo2.vue')
    },
    {
        path: '/life',
        component: () => import('../components/level1/LifeCycle.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

