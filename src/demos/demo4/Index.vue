
<!--// @Provide  提供  /  @Inject  注入-->

<template>
  <div class="hello">
    <ChildComp :msg="'What a good day!'"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Provide} from 'vue-property-decorator'

import ChildComp from './Child.vue';

@Component({
  components:{
    ChildComp
  }
})
export default class Hello extends Vue {

  @Provide('users')
  users = [
    {
      name: 'test',
      id: 0
    }
  ]

}
</script>
