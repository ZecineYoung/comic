import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import cartoon from '@/components/cartoon'
import background from '@/components/background'
import mine from '@/components/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cartoon',
      name: 'cartoon',
      component: cartoon
    },
    {
      path: '/background',
      name: 'background',
      component: background
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
