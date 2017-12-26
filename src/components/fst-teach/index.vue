<template>
  <div class="teach">
    {{msg}}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class Teach extends Vue {
    msg: string = 'teach页面'
  }
</script>

<style lang="scss">
  @import '../../common/scss/variable';
  .teach {
  }
</style>
