import Vue from 'vue'
import Router from 'vue-router'

import Manage from '@components/fst-manage/index.vue'
import Program from '@components/fst-program/index.vue'
import Communicate from '@components/fst-communicate/index.vue'
import Data from '@components/fst-data/index.vue'
import System from '@components/fst-system/index.vue'
import Teach from '@components/fst-teach/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/manage'
    },{
      path: '/manage',
      component: Manage
    },{
      path: '/program',
      component: Program,
      children: []
    },{
      path: '/teach',
      component: Teach,
      children: []
    },{
      path: '/data',
      component: Data,
      children: []
    },{
      path: '/communicate',
      component: Communicate,
      children: []
    },{
      path: '/system',
      component: System,
      children: []
    }
  ]
})
