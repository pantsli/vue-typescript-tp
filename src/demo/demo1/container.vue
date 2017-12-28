<template>
  <div class="layout">
    <el-container>
      <el-header>headr</el-header>
      <el-main>main</el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    data (){
      return {
        message:'abc'
      }
    },
    methods:{
      onClick (){
        window.alert(this.message)
      }
    }

  })
</script>

<style lang="scss" scoped>
  .layout {
    body > .el-container {
      position: absolute;
      background: red;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
    /*.el-header {*/
      /*background-color: #B3C0D1;*/
      /*color: #333;*/
      /*text-align: center;*/
      /*line-height: 60px;*/
    /*}*/

    /*.el-main {*/
      /*background-color: #E9EEF3;*/
      /*color: #333;*/
      /*text-align: center;*/
      /*!*position: absolute;*/
      /*height: 100%;*/
      /*width: 100%;*!*/
    /*}*/
  }
</style>
