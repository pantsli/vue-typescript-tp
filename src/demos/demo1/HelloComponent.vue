<!--@Model  数据双向绑定-->
<template>
    <div>
        <p>{{message}}</p>
        <p>{{count}}</p>
        <p>计算属性:{{aDouble}}</p>
        <button @click="clicked">Click</button>
    </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  const HelloComponent = Vue.extend({
    // 类型推断已启用
     data(){
       return {
        count:1,
        message:'hello,world!'
      }
     },
    computed: {
      // 仅读取
      aDouble():any {
        return this.count * 2;
      }
    },
    methods:{
      clicked(){
        console.log('clicked wowo')
        this.count ++;
      }
    }
  })
  export default HelloComponent;
</script>

<style lang="scss">

</style>
