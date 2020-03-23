import Vue from 'vue'
import VueRouter from 'vue-router'

//COMPONENTS
import About  from '@/components/about'
import Home   from '@/components/home'

//DATA FORMATTING COMPONENTS
import Data       from '@/components/Data/data'
import HeroData   from '@/components/Data/heroData'
import ItemData   from '@/components/Data/itemData'
import Output     from '@/components/Data/output'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //COMPONENT ROUTES
  {
    path: '/About',
    name: 'About',
    component: About
  },
  //DATA FORMATTING TOOLS
  {
    path: '/Data',
    name: 'Data',
    component: Data
  },
  {
    path: '/HeroData',
    name: 'HeroData',
    component: HeroData
  },
  {
    path: '/ItemData',
    name: 'ItemData',
    component: ItemData
  },
  {
    path: '/Output',
    name: 'Output',
    component: Output
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
