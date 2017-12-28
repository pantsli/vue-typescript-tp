
<!--@Model  数据双向绑定-->

<template>
    <div>
        <MyCheckbox :label="checkbox.label" :id="checkbox.id" v-model="checkbox.checked"/>

        {{JSON.stringify(checkbox)}}
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import MyCheckbox from './MyCheckbox.vue'

@Component({
    components: {
        MyCheckbox
    }
})
export default class HelloTs extends Vue {

    checkbox = {
        label: 'Fancy checkbox',
        id: 'checkbox-id',
        checked: true
    }
}
</script>
