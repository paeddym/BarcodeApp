import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductInfo from '../views/ProductInfo.vue'
import ScanHistory from '../views/ScanHistory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/productinfo',
      name: 'productinfo',
      component: ProductInfo
    },
    {
      path: '/scanhistory',
      name: 'scanhistory',
      component: ScanHistory
    }
  ]
})

export default router
