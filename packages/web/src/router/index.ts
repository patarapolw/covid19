import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      alias: '/home',
      component: () => import(/* webpackChunkName: "[request]" */ '@/views/Home.vue')
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "[request]" */ '@/views/About.vue')
    }
  ]
})

export default router
