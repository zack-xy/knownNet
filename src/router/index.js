import Vue from 'vue'
import VueRouter from 'vue-router'
import TimeLine from '../views/timeLine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TimeLine',
    component: TimeLine
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
