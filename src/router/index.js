import Vue from 'vue'
import Router from 'vue-router'

import Mode from '@/components/mode'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
  }, {
    path: '/mode',
    name: 'Mode',
    component: Mode,
  }]
})
