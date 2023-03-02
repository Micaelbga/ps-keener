import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import StoreView from '../views/StoreView.vue'
import CreateItemView from '../views/CreateItemView.vue'
import AddItemView from '../views/AddItemView.vue'
import RemoveItemView from '../views/RemoveItemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView
    },
    {
      path: '/createitem',
      name: 'createitem',
      component: CreateItemView
    },
    {
      path: '/additem',
      name: 'additem',
      component: AddItemView
    },
    {
      path: '/removeitem',
      name: 'removeitem',
      component: RemoveItemView
    },
    
  ]
})

export default router
