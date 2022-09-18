import { createRouter, createWebHashHistory} from "vue-router";

 import HomeView from "../components/views/HomeView.vue"

 import AboutView from "../components/views/AboutView.vue"


const routes = [
    {
        component: HomeView,
        path:'/',
    },
    {
        path:'/about',
        component: AboutView
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})


export default router;