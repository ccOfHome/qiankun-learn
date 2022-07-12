<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <hr>
      <br>
      <router-link to="/about">About</router-link>
      <hr>
      <router-link to="/app-vue">微应用vue-app</router-link>
      <hr>
      <router-link to="/app-react">微应用react-app</router-link>
      <hr>
    </div>
    <router-view />
    <div id="container"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
