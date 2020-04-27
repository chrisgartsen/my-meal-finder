import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('@/views/meals-index.vue') },
  { path: '/categories', component: () => import('@/views/meal-categories.vue') },
  { path: '/details/:idMeal', component: () => import('@/views/meal-detail.vue'), props: true}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
