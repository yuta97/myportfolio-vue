import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Works from '@/components/Works'
import Career from '@/components/Career'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/career',
      name: 'Career',
      component: Career
    }
  ]
})
