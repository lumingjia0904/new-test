<template>
  <div id="index">
    <!-- <img src="./assets/logo.png"> -->
    
    <!-- 页面缓存 -->
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
