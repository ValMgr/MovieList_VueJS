import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies',
    name: 'Movies',

    component: () => import(/* webpackChunkName: "about" */ '../views/Movies.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
