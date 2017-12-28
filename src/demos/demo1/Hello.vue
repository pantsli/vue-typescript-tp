<!--@Model  数据双向绑定-->
<template>
    <div>
        <p>{{message}}</p>
        <p>{{count}}</p>
        <p>计算属性:{{aCount}}</p>
        <button @click="clicked">Click</button>
    </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    data(){
      return{
        count:0,
        message:'hello,world!'
      }
    },
    computed:{
      aCount():any{
        return this.count+1;
      }
    },
    methods:{
      clicked(){
        window.alert('clicked')
        this.count++
      }
    }
  })
</script>

<style lang="scss">

</style>
