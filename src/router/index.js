import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/homeview' 
  },
  {
    path:'/homeview',
    component: HomeView,
    name:'HomeView'
  },
  {
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
