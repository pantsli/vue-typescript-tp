
<!--// @Watch  监听数据变化-->

<template>
  <div class="hello">
    <button @click="clicked">Click</button> {{sum.acum}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Watch} from 'vue-property-decorator'

@Component({
})
export default class Hello extends Vue {

  sum = {
    acum: 0
  }
  // @Watch  监听数据变化
  @Watch('sum', {deep: true})
  watchCount(newVal:any, oldVal:any) {
    console.log("newVal", newVal, "oldVal", oldVal)
  }

  clicked() {
    this.sum.acum++;
  }
}
</script>
