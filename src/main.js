// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plug from './components/plug/install'
import './assets/less/app.less'
Vue.config.productionTip = false

import 'animate.css'

// 相当于是`MyPlugin.install(Vue)`
Vue.use(plug)

// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
/* eslint-disable no-new */
new Vue({el: '#app', router, template: '<App/>', components: {
    App
  }})
