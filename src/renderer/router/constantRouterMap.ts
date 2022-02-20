import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    { path: '/:pathMatch(.*)*', component: () => import("@/views/404.vue") },
    { path: '/', name: '总览', component: () => import('@/components/LandingPage.vue') },
]

export default routes