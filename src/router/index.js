import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/daftar',
    name: 'Daftar',
    component: () => import('../views/Daftar.vue'),
  },
  {
    path: '/lupa-password',
    name: 'Lupa Password',
    component: () => import('../views/LupaPassword.vue'),
  },
  {
    path: '/reset-password',
    name: 'Reset Password',
    component: () => import('../views/ResetPassword.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
