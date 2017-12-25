import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
import Know from '@/components/know'
import Instance from '@/components/instance'
import Computed from '@/components/computed'
import ShowAndIf from '@/components/showAndIf'
import ForTemplate from '@/components/for'
import Bind from '@/components/bind'
import Modifier from '@/components/modifier'
import KeyCode from '@/components/keyCode'
import ClassModule from '@/components/class'
import StyleModule from '@/components/style'
import Filter from '@/components/filter'
import Form from '@/components/form'
import Prop from '@/components/prop'
import CustomEvent from '@/components/customEvent'
import EventBus from '@/components/eventBus'
import Slot from '@/components/slot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/know',
      name: 'Know',
      component: Know
    }, {
      path: '/instance',
      name: 'Instance',
      component: Instance
    }, {
      path: '/computed',
      name: 'Computed',
      component: Computed
    }, {
      path: '/showAndIf',
      name: 'ShowAndIf',
      component: ShowAndIf
    }, {
      path: '/forTemplate',
      name: 'ForTemplate',
      component: ForTemplate
    }, {
      path: '/bind',
      name: 'Bind',
      component: Bind
    }, {
      path: '/modifier',
      name: 'Modifier',
      component: Modifier
    }, {
      path: '/keyCode',
      name: 'KeyCode',
      component: KeyCode
    }, {
      path: '/class',
      name: 'ClassModule',
      component: ClassModule
    }, {
      path: '/style',
      name: 'StyleModule',
      component: StyleModule
    }, {
      path: '/filter',
      name: 'Filter',
      component: Filter
    }, {
      path: '/form',
      name: 'Form',
      component: Form
    }, {
      path: '/prop',
      name: 'Prop',
      component: Prop
    }, {
      path: '/customEvent',
      name: 'CustomEvent',
      component: CustomEvent
    }, {
      path: '/eventBus',
      name: 'EventBus',
      component: EventBus
    }, {
      path: '/slot',
      name: 'Slot',
      component: Slot
    }
  ]
})
