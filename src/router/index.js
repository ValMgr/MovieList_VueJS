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
    name: 'ViewMovie',
    component: () => import('../views/ViewMedia.vue'),
    children: [
      {
        path: 'edit',
        component: () => import('../components/MediaForm.vue')
      },
    ]
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
