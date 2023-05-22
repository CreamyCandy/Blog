import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [{
  path: '/',
  component: () => import('../components/HelloWorld.vue')
}, {
  path: '/login',
  component: () => import('../components/Login.vue')
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router