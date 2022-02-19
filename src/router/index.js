import { createWebHistory, createRouter} from 'vue-router'
import DashboardLogin from '../components/DashboardLogin'
// import HomeLogin from "@/components/HomeLogin.vue";


const history = createWebHistory();

const routes = [
    {path: '/dashboard', name:'DashboardLogin',component: DashboardLogin}
]

const router = createRouter({
    history,
    routes

})

export default router;