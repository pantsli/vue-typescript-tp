<template>
  <div class="hello">
    <button @click="clicked">Click</button>
    <ChildComp msg="'What a good day!'"/>
    <router-link to="/hello-ts">Hello Ts</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import ChildComp from './Child.vue';

@Component({
  directives:{},
  components: {
    ChildComp
  }
})
export default class Hello extends Vue {
  message: string = 'Welcome to Your Vue.js App'

  get fullMessage() {
    return `${this.message} from Typescript`
  }

  created() {
    console.log('created')
  }

  beforeRouteEnter(to: any, from: any, next: any) {
    console.log("Hello: beforeRouteEnter")
    next()
  }

  beforeRouteLeave(to: any, from: any, next: any) {
    console.log("Hello: beforeRouteLeave")
    next()
  }

  clicked() {
    console.log('clicked');
  }
}
</script>
