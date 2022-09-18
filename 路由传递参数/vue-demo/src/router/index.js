import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/news',
    name: 'news',
    // 这种声明方式比起在最上面import性能更好一些，属于懒加载方式
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsView.vue')
  },
  {
    path: '/news/detail/:name',
    name: 'newsDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsDetailView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
