<template>
  <div id="app">
    <head-bar></head-bar>
    <router-view class="rv"></router-view>
  </div>
</template>

<script>
import HeadBar from './components/HeadBar.vue'
export default {
  name: 'app',
  components: {
    'head-bar': HeadBar
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.rv {
  padding-top: 60px;
}

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
