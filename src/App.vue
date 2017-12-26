<template>
  <div id="app">
    <fst-header></fst-header>
    <fst-main></fst-main>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
	import Component from 'vue-class-component'
  import FstHeader from '@components/fst-header/header.vue'
  import FstMain from '@components/fst-main/index.vue'
	@Component({
    components:{
      FstHeader,
      FstMain,
    }
  })
  export default class App extends Vue {

  }
</script>

<style lang="scss">
  #app{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    background: #8391a5;
  }

</style>
