import Vue from 'vue'
import Component from 'vue-class-component'
import router from './router'
import store from './store'
import App from './App.vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

import '@common/scss/index.scss'
import { format } from './filters'

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

export default app
