<template>
  <div class="fst-tab">
    <router-link class="tab-item" to="/manage">
      <span class="tab-link">Manage</span>
    </router-link>
    <router-link class="tab-item" to="/program">
      <span class="tab-link">Program</span>
    </router-link>
    <router-link class="tab-item" to="/teach">
      <span class="tab-link">Teach</span>
    </router-link>
    <router-link class="tab-item" to="/communicate">
      <span class="tab-link">Communicate</span>
    </router-link>
    <router-link class="tab-item" to="/system">
      <span class="tab-link">System</span>
    </router-link>
    <router-link class="tab-item" to="/data">
      <span class="tab-link">Data</span>
    </router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class FstTab extends Vue {
    msg: string = 'MainMenu'
  }
</script>

<style lang="scss">
  @import '../../common/scss/variable';

  .fst-tab {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: $tab-height;
    line-height:$tab-height;
    overflow: hidden;
    background: red;
    font-size: $font-size-medium;
    .tab-item {
      flex: 1;
      text-align: center;
      background:#ccc;
      .tab-link {
        padding-bottom: 5px;
        color: $color-theme;
      }
      &.router-link-active{
        .tab-link{
          color: $color-theme;
          border-bottom: 2px solid $color-theme;
          }
      }
    }
  }
</style>
