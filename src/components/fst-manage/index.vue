<template>
  <div class="manage">
    {{msg}}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class Manage extends Vue {
    msg: string = 'manage页面'
  }
</script>

<style lang="scss">
  @import '../../common/scss/variable';
  .manage {
  }
</style>
