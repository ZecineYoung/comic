<template>
  <div>
    <div class="mine">
      <div class="mine-pic"><img src="../../static/image/2.jpg"/></div>
       <div class="mine-font">
        <p>欢 迎 登 录 动 漫 云</p>
        <p>Welcome to register Comic Cloud</p>
      </div>
      <div class="mine-input">
        <div><input type="text" placeholder="请输入用户名"/></div>
        <div><input type="text" placeholder="请输入密码"/></div>
      </div>
      <div class="mine-button">
        <input type="button" value="登录"/>
        <input type="button" value="注册"/>
        <!-- <input type="button" value="获取" @click="get()"/> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    //全局设置背景色
    
  }

</script>

<style scoped>/*scoped 实现组件的私有化，不对全局造成样式污染*/
  body{
    margin: 0;
    /* background-color: aliceblue; */
  }
  .mine{
    background-color: aliceblue;
  }

  .mine-pic img{
    width: 100%;
    background-size: 100% 100%;
  }
  .mine-font p{
    margin-top:2px ;
    margin-bottom: 2px;
  }
  .mine-font p:nth-child(1){
    font-size: 24px;
    font-weight: 500;
    color: white;
    text-shadow: 2px 0 0  black,
                  0  0  2px black;
    text-align: center;
  }
  .mine-font p:nth-child(2){
    font-size: 14px;
    font-weight: 100;
    text-align: center;
  }
  .mine-input{
    margin-top: 20px;
    text-align: center;
  }
  .mine-input input{
    padding: 2px;
    border-radius: 5px;
    width: 200px;
    height: 25px;
  }
  .mine-input div:nth-child(2){
    margin-top:5px;
  }
  .mine-button{
    text-align: center;
    margin-top: 20px;
  }
  .mine-button input{
    font-size: 16px;
    color: white;
    text-shadow: 2px 0 0 black,
                  0 0 1px black;
    width: 70px;
    height: 30px;
    border: 1 solid red;
    border-radius: 3px;
    background-color: lemonchiffon;
  }
</style>
