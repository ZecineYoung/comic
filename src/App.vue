<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view style="padding-bottom: 55px;"/>
  <!--  <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
    </el-row> -->

      <mt-tabbar v-model="selected" :fixed="true">
          <mt-tab-item id="Home">
            <img slot="icon">
            首页
          </mt-tab-item>
        <mt-tab-item id="cartoon">
          <img slot="icon">
            漫画
          </mt-tab-item>
        <mt-tab-item id="background">
          <img slot="icon">
          壁纸
          </mt-tab-item>
        <mt-tab-item id="mine">
          <img slot="icon">
          我的
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      selected:"tab1",
    }
  },
  mounted(){
    document.body.style.backgroundColor="#eee";
  },
  watch:{
          selected: function (val, oldVal) {
                  // 这里就可以通过 val 的值变更来确定
                  if(val === "Home"){
                  this.$router.replace("/Home")
                  }else if(val === "cartoon"){
                    this.$router.replace("/cartoon")
                  }else if(val === "background"){
                    this.$router.replace("/background")
                  }else if(val === "mine"){
                    this.$router.replace("/mine")
                    }


          }
  }

}
</script>

<style scoped>
  body{
    margin: 0;
  }
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */


</style>
