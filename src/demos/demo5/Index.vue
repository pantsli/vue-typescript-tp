
<!--// 自定义装饰器-->

<template>
  <div class="hello" id="message">
<p>{{message}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component,{ createDecorator } from 'vue-class-component'

const Log = (msg:any) => {
  return createDecorator((component:any, key:any) => {
    console.log("#Component", component);
    console.log("#Key", key); //log
    console.log("#Msg", msg); //App
  })
}
@Component
export default class Com5 extends Vue {
   message: string = 'hey!guy!open the console'
  @Log('fullMessage get called')
  get fullMessage() {
    return `${this.message} from Typescript`
  }

}
</script>
