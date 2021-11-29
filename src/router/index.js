import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../App.vue'
import Photos from '../App1.vue'
import Video from '../App2.vue'
import About from '../App3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/Photos',
    name: 'Photos',
    component: Photos
  },
  {
    path:'/Video',
    name:'Video',
    component: Video
  },
  {
    path:'/About',
    name:'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
