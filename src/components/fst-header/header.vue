<template>
	<div class="fst-header">
     <div class="icon"></div>
      <h1 class="text">福赛特机器人</h1>
  </div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'

	@Component({})
	export default class Header extends Vue {
	}
</script>

<style lang="scss">
  @import '../../common/scss/variable';
  .fst-header {
    position: relative;
    height: 48px;
    line-height: 48px;
    margin-top: 6px;
    text-align: center;
    color:$color-theme;
    font-size: 0;
    .icon {
      display: inline-block;
      vertical-align: top;
      background: url("../../common/image/logo.png") no-repeat;
      height: 48px;
      width: 156px;
    }
    .text {
      display: inline-block;
      vertical-align: top;
      font-size: $font-size-large;
    }
  }

</style>
