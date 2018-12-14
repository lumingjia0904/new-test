<template>
  <div class="hello">
    <el-carousel height="150px">
      <el-carousel-item
        v-for="item in 4"
        :key="item"
      >
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div>
      <img
        :src="imgSrc"
      >
    </div>

    <h1>{{msg}}</h1>
    <button @click="change"></button>

    <router-link to="/user">to user2</router-link>
    <router-link to="/home">to home2</router-link>
  </div>
</template>

<script>
import core from "core";
export default {
  name: "index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      imgSrc: require("../../assets/logo.png")
    };
  },
  mounted: function() {
    this.imgSrc = this.$store.state.userInfo.img;
    this.$store.commit("SET_AGE", 30);

    // this.msg=this.$store.state.userInfo.info.name;
    // this.msg=this.$store.state.userInfo.info.name;
    // console.log(this.$store.getters)
    this.msg = this.$store.getters["GET_USER_NAME"];
    console.log(this.$store.state.userInfo);
    core.api.index.info({})
      .then(res => {
        console.log(res);
        this.dataShow = res.data;
      })
  },
  methods: {
    change() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped rel="stylesheet/less" type="text/css">
h1,
h2 {
  font-weight: normal;
  span {
    font-size: 100px;
  }
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
