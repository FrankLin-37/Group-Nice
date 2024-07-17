import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Salary',
      name: 'Salary',
      component: () => import('../views/Salary.vue')
    },
    {
      path: '/Donate',
      name: 'Donate',
      component: () => import('../views/Donate.vue')
    },
    {
      path: '/Case',
      name: 'Case',
      component: () => import('../views/Case.vue')
    },
    {
      path: '/TaiwanMap',
      name: 'TaiwanMap',
      component: () => import('../views/TaiwanMap.vue')
    }
  ]
})

export default router
