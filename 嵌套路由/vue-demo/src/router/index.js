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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    // 重定向
    redirect: "/about/us",
    children: [
      {
        // 二级导航不要加/
        path: 'us',
        name: 'us',
        component: () => import("../views/sub_views/AboutUs.vue")
      },
      {
        // 二级导航不要加/
        path: 'world',
        name: 'world',
        component: () => import("../views/sub_views/AboutWorld.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
