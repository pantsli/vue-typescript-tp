
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
    el: '#app', router,
    template: '<App/>',
    components: { App }
})
class Student {
    fullName: string
    constructor (public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
    }
}

interface Person {
    firstName: string,
    lastName: string
}

function greeter (person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = new Student('Jane', 'M.', 'User')

console.log(greeter(user))
