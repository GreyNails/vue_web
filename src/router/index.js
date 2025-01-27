import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home_test.vue')
      },
  {
    path: '/jiguang',
    name: 'Jiguang',
    component: () => import('../views/jiguang.vue')
  },
  {
    path: '/jiqiren',
    name: 'Jiqiren',
    component: () => import('../views/jiqiren.vue')
  },
  {
    path: '/cailiao',
    name: 'Cailiao',
    component: () => import('../views/cailiao.vue')
  },
  {
    path: '/jiaotong',
    name: 'Jiaotong',
    component: () => import('../views/jiaotong.vue')
  },
  {
    path: '/ai',
    name: 'AI',
    component: () => import('../views/ai.vue')
  },
  {
    path: '/new',
    name: 'New',
    component: () => import('../views/new.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 