// App.vue 進來就是這邊
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // 前台路由表
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/',
        component: HomeView
      },
      {
        path: 'cart', // 購物車路由表
        component: () => import('../views/CartView.vue')
      },
      {
        path: 'products', // 商品列表路由表
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: 'product/:id', // 單一品項會使用 id 去做傳遞
        component: () => import('../views/ProductView.vue')
      }
    ]
  },

  // 後台路由表
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products', // 商品列表路由表
        component: () => import('../views/AdminProducts.vue')
      },
      {
        path: 'coupon', // 商品列表路由表
        component: () => import('../views/AdminCoupon.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active' // bootstrap route-active 效果(當前的啟用連結會有效果，會在子路由加入)
})

export default router
