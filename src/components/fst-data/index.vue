<template>
  <div class="data">
    {{msg}}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class Data extends Vue {
    msg: string = 'data页面'
  }
</script>

<style lang="scss">
  @import '../../common/scss/variable';
  .data {
  }
</style>
