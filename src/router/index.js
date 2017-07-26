import Vue from 'vue'
import Router from 'vue-router'

import Mode from '@/components/mode'
import LazyLoad from '@/components/lazyLoad'
import Cascader from '@/components/cascader'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
  }, {
    path: '/cascader',
    name: 'Cascader',
    component: Cascader,
  }, {
    path: '/lazyLoad',
    name: 'LazyLoad',
    component: LazyLoad,
  }, {
    path: '/mode',
    name: 'Mode',
    component: Mode,
  }]
})
