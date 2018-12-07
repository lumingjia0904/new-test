<template>
  <div class="hello">
    <!-- <img src="../../assets/logo.png"> -->
    <h1>index</h1>
    <l-test></l-test>
  </div>
</template>

<script>
import core from 'core'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
    console.log(core)
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
