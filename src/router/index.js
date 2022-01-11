import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
      path: '/mine',
      name: 'Mine',
      component: () => import('../views/Mine')
  },
  {
      path: '/about',
      name: 'About',
      component: () => import('../views/About')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
