import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'About', component: () => import('@/views/Page1.vue') },
  { path: '/page2', name: 'About', component: () => import('@/views/Page2.vue') },
  { path: '/page3', name: 'About', component: () => import('@/views/Page3.vue') },
  { path: '/page4', name: 'About', component: () => import('@/views/Page4.vue') },
  { path: '/page5', name: 'About', component: () => import('@/views/Page5.vue') },
  { path: '/page6', name: 'About', component: () => import('@/views/Page6.vue') },
  { path: '/page7', name: 'About', component: () => import('@/views/Page7.vue') },
  { path: '/page8', name: 'About', component: () => import('@/views/Page8.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
