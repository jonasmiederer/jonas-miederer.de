<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>

<style lang="scss">
  @import 'assets/css/style.css';
  @import '../node_modules/material-components-web/dist/material-components-web.css';
  @import '../node_modules/bootstrap/scss/functions';
  @import '../node_modules/bootstrap/scss/bootstrap';
</style>
