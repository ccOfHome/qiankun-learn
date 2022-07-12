<template>
  <div>
    <div id="vue-container"></div>
    <div id="react-container"></div>
  </div>
</template>

<script>
import { start } from 'qiankun'

export default {
  name: "HelloWorld",
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }  
  }
};
</script>

<style scoped>
</style>
