<template>
  <div id="app">
    <HelloWorld propMessage="hello everyone"/>
  </div>
</template>

<script lang="ts">

import Component, { mixins } from 'vue-class-component'
import HelloWorld from './components/HelloWorld.vue';
import MyMixin from './mixin'

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends mixins(MyMixin) {
  created () {
    console.log(this.mixinValue) // -> Hello
  }
}
</script>

<style lang="scss">
</style>

