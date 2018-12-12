<template>
  <div class="hello">
    <img :src="imgSrc">
    <h1>{{msg}}</h1>
    <button @click="change"></button>
    <router-link to="/user">to user2</router-link>
    <router-link to="/home">to home2</router-link>
  </div>
</template>

<script>
import core from 'core'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgSrc:require('../../assets/logo.png')
    }
  },
  mounted:function(){
    
    this.imgSrc=this.$store.state.userInfo.img;
    this.$store.commit('SET_AGE',30);

    // this.msg=this.$store.state.userInfo.info.name;
    // this.msg=this.$store.state.userInfo.info.name;
    // console.log(this.$store.getters)
    this.msg=this.$store.getters["GET_USER_NAME"];
    console.log(this.$store.state.userInfo)
  },
  methods:{
    change(){

    }
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
