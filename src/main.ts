import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


var vm = new Vue()
vm.$myProperty='libai'
console.log(vm.$myProperty) // 将会顺利编译通过