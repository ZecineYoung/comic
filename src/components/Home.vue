<template>
  <div>

    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../../static/image/1.jpg"/></mt-swipe-item>
      <mt-swipe-item><img src="../../static/image/2.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="../../static/image/3.jpg" /></mt-swipe-item>
    </mt-swipe>

    <div class="home-content">
      <div class="home-title">⭐<span>动漫内容推荐</span>⭐</div>
      <div class="home-class">
          <div class="home-class-one">
            <a href="#">
              <div>
                <img src="../../static/image/icon1.jpg"/>
              </div>
              <span>热血</span>
             </a>
            <a href="#">
              <div>
                <img src="../../static/image/icon1.jpg"/>
              </div>
              <span>浪漫</span>
            </a>
            <a href="#">
              <div>
                <img src="../../static/image/icon1.jpg"/>
              </div>
              <span>校园</span>
            </a>
            <a href="#">
              <div>
                <img src="../../static/image/icon1.jpg"/>
              </div>
              <span>推理</span>
            </a>
            <a href="#">
              <div>
                <img src="../../static/image/icon1.jpg"/>
              </div>
              <span>格斗</span>
            </a>
          </div>
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
  .home-class-one{
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .home-class-one a{
    width: 50px;
    height:72px;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    background-color: #F0F8FF;
    border-radius: 6px;
    box-shadow: 0px 0px 2px grey;
    /* border: 1px solid lightyellow; */
  }
  .home-class-one a div{
    /* position: relative; */
    /* display: inline-block; */
    width: 100%;
    height:50px;
    overflow: hidden;
    border: 1px solid #FFFACD;
    box-sizing: border-box;
  }
  .home-class-one a span{
      text-align: center;
      /* z-index: 1; */
      font-family:"宋体";
  }
  .home-class-one a div img{
    width: 100%;
    height: 100%;
    /* border: 1px solid #FFFACD; */
    border-radius: 5px;
  }
</style>
