<template>
  <div class="fst-main">
    <fst-tab></fst-tab>
    <div class="fst-content">
      <keep-alive>
        <router-view></router-view>
    </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import FstTab from '@components/fst-main/fst-tab.vue'
	@Component({
    components:{
      FstTab
    }
  })
  export default class MainMenu extends Vue {
    msg: string = 'Main ...'
  }
</script>

<style lang="scss">
  @import '../../common/scss/variable';
  .fst-main {
    position: absolute;
    top: 80px;
    bottom: 0;
    width: 100%;
    background: green;
    .fst-content {
      position: absolute;
      top: 40px;
      bottom: 0;
      width: 100%;
      background: #fff;
    }
  }

</style>
