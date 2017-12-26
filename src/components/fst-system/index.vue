<template>
  <div class="system">
    {{msg}}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class System extends Vue {
    msg: string = 'system页面'
  }
</script>

<style lang="scss">
  @import '../../common/scss/variable';
  .system {
  }
</style>
