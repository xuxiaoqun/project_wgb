<template>
  <div id="app" style="height: 100%">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

  .app {
    width: 100%;
    height: 100%;
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: #E9EEF3;
  }

  * {
    margin: 0;
    padding: 0;
  }

</style>
