<template>
  <div>
      {{users}}
      <p>{{message}}</p>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import {Component, Inject} from 'vue-property-decorator'

@Component({})
export default class Child extends Vue {
    message: string = "Hello";

    // @Provide  提供  /  @Inject  注入
    @Inject('users') users: any;
}
</script>
