import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/movies',
    name: 'Movies',
    component: () => import('../views/Movies.vue')
  },
  {
    path: '/series',
    name: 'Series',
    component: () => import('../views/Series.vue')
  },
  {
    path: '/movies/:id',
    name: 'editMovie',
    component: () => import('../views/ViewMedia.vue'),
    props: {
      type: 'movies',
    },
   
  },
  {
    path: '/movies/:id/edit',
    name: 'ViewMovie',
    component: () => import('../views/AddMedia.vue'),
    props: {
      type: 'movies',
      action: 'edit'
    }
  },
  {
    path: '/series/:id',
    name: 'ViewSerie',
    component: () => import('../views/ViewMedia.vue'),
    props: {
      type: 'series',
    }
  },
  {
    path: '/series/:id/edit',
    name: 'editSerie',
    component: () => import('../views/AddMedia.vue'),
    props: {
      type: 'series',
      action: 'edit'
    }
  },
  {
    path: '/media/add/:type',
    name: 'MediaAdd',
    component: () => import('../views/AddMedia.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
