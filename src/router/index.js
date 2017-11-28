import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
import Know from '@/components/know'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
  }, {
    path: '/know',
    name: 'Know',
    component: Know,
  }]
})
