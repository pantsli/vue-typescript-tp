<template>
  <div class="fst-home">
    {{msg}}
    <p>tpVersion: {{tpVersion}}</p>
    <p>controllerVersion: {{controllerVersion}}</p>
    <p>serialNumber: {{serialNumber}}</p>
    <p>controllerModel: {{controllerModel}}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class FstHome extends Vue {
    private msg: string = 'home页面1'

    private get tpVersion(): string {
      return this.$store.state.tpVersion
    }
    private get controllerVersion(): string {
      return this.$store.state.controllerVersion
    }
    private get serialNumber(): string {
      return this.$store.state.serialNumber
    }

     private get controllerModel(): string {
      return this.$store.state.controllerModel
    }

    beforeCreate (): void {
      Promise.all([
        this.$store.dispatch('getTpVersion'),
        this.$store.dispatch('getSerialNumber'),
        this.$store.dispatch('getControllerVersion'),
        this.$store.dispatch('getControllerModel')
      ])
    }
  }
</script>

<style lang="scss">
  @import '../../common/scss/variable';
  .fst-home {
  }
</style>
