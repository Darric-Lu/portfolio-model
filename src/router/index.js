import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import AboutMe from '../views/AboutMe.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
