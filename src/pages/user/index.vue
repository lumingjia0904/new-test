<template>
  <div class="hello">
    <!-- <img src="../../assets/logo.png"> -->
    <h1>user</h1>
    <router-link to="/user">to user1</router-link>
    <router-link to="/home">to home1</router-link>
    <router-link to="/user/set">to set1</router-link>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import core from 'core'
export default {
  name: 'user',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
