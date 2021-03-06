import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/pages/home'
import Spot from '@/components/pages/spot'
import Mine from '@/components/pages/mine'
import Explore from '@/components/pages/explore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/spot',
      name: 'Spot',
      component: Spot
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore
    }
  ]
})
