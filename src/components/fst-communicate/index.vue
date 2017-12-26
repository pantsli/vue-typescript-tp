<template>
  <div class="communicate">
    {{msg}}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class Communicate extends Vue {
    msg: string = 'communicate页面'
  }
</script>

<style lang="scss">
  @import '../../common/scss/variable';
  .communicate {
  }
</style>
