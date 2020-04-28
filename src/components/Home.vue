<template>
  <div>

    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../../static/image/1.jpg"/></mt-swipe-item>
      <mt-swipe-item><img src="../../static/image/2.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="../../static/image/3.jpg" /></mt-swipe-item>
    </mt-swipe>

    <div class="home-content">
      <div class="home-title">⭐<span>动漫内容推荐</span>⭐</div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
  export default{
     data(){
      return{

      }
    }
  }

</script>

<style>
  .mint-swipe {
         height: 12.5rem;
          border-radius: 10px;
      }
  .mint-swipe img{
    width: 100%;
    background-size: 100% 100%;
  }
  .home-title{
    font-size: 24px;
    font-weight: 500;
    background-color: aliceblue;
  }
  .home-title span{
    color: white;
    text-shadow: 1px 0 1px black,
                  -1px 0 1px black,
                  0 1px 1px black,
                  0 -1px 1px black;
  }
</style>
