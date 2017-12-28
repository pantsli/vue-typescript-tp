import Vue from 'vue'
import Component from 'vue-class-component'
import router from './router'
import store from './store'
import App from './demos/demo1/Hello.vue'
// import App from './demos/demo1/HelloComponent.vue'
// import App from './demos/demo5/Index.vue'
// import App from './demos/demo4/Index.vue'
// import App from './demos/demo3/@Watch.vue'
// import App from './demos/demo2/Index.vue'
// import App from './demos/Parent.vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

import '@common/scss/index.scss'

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})

export default app
