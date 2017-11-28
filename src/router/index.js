import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
import Know from '@/components/know'
import Instance from '@/components/instance'
import Computed from '@/components/computed'
import ShowAndIf from '@/components/showAndIf'
import ForTemplate from '@/components/for'

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
  }, {
    path: '/instance',
    name: 'Instance',
    component: Instance,
  }, {
    path: '/computed',
    name: 'Computed',
    component: Computed,
  }, {
    path: '/showAndIf',
    name: 'ShowAndIf',
    component: ShowAndIf,
  }, {
    path: '/forTemplate',
    name: 'ForTemplate',
    component: ForTemplate
  }]
})
