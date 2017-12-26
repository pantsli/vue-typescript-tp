<template>
  <div class="program">
    {{msg}}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class Program extends Vue {
    msg: string = 'program页面'
  }
</script>

<style lang="scss">
  @import '../../common/scss/variable';

</style>
