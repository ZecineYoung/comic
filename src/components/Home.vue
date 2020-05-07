<template>
  <div>

    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../../static/image/1.jpg"/></mt-swipe-item>
      <mt-swipe-item><img src="../../static/image/2.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="../../static/image/3.jpg" /></mt-swipe-item>
    </mt-swipe>

    <div class="home-content">
      <div class="home-title">
        <a v-on:click="switchPage"><img src="../../static/image/search.jpg" width="35px" height="35px"/></a>
        <transition name="fade">
           <span v-if="noSearch">⭐动漫内容推荐⭐</span>
          <input type="text" placeholder="search" v-else/>
        </transition>


      </div>
      <div style="clear: both;"></div>
      <div class="home-class">
          <div class="home-class-one">
            <a href="#" v-for="content in item" :key="content.id">
              <div>
                <img :src="content.image"/>
              </div>
              <span>{{content.name}}</span>
             </a>
            <!-- <a href="#">
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
            </a> -->
          </div>
          <div class="home-class-one">
            <a href="#" v-for="content1 in item1" :key="content1.id">
              <div>
                <img :src="content1.image"/>
              </div>
              <span>{{content1.name}}</span>
             </a>
          </div>
      </div>
      <div class="Home-hot">
        <div class="Home-hot-one">
          <p>热门动漫 ></p>
          <div>
            <a><img src="../../static/image/2.jpg"/><span>火影</span></a>
            <a><img src="../../static/image/2.jpg"/><span>柯南</span></a>
          </div>
        </div>
        <div class="Home-hot-two">
          <p>猜你喜欢 ></p>
          <div>
            <a><img src="../../static/image/2.jpg"/><span>海贼</span></a>
            <a><img src="../../static/image/2.jpg"/><span>火影</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
     data(){
      return{
          noSearch:true,
          item:[
            {image:"../static/image/icon1.jpg",name:"热血",id:1},
            {image:"../static/image/icon1.jpg",name:"爱情",id:2},
            {image:"../static/image/icon1.jpg",name:"格斗",id:3},
            {image:"../static/image/icon1.jpg",name:"推理",id:4},
            {image:"../static/image/icon1.jpg",name:"校园",id:5}
          ],
          item1:[
            {image:"../static/image/icon1.jpg",name:"热血1",id:1},
            {image:"../static/image/icon1.jpg",name:"爱情1",id:2},
            {image:"../static/image/icon1.jpg",name:"格斗1",id:3},
            {image:"../static/image/icon1.jpg",name:"推理1",id:4},
            {image:"../static/image/icon1.jpg",name:"校园1",id:5}
          ],

      }
    },
    methods:{
      switchPage(){
        this.noSearch = !this.noSearch
      }
    }
  }

</script>

<style>
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }
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
    padding: 5px;
    background-color: aliceblue;
    /* border-bottom: 1px dotted #000000; */
  }
  .home-title span{
    color: white;
    display: block;
    text-shadow: 1px 0 1px black,
                  -1px 0 1px black,
                  0 1px 1px black,
                  0 -1px 1px black;
  }
  .home-title a{
    float: right;
  }
  .home-title input{
    height: 22px;
    width: 250px;
    border-radius: 5px;
    padding: 2px;
    border: 2px solid darkgray;
  }
  .home-class-one{
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dotted #000000;
    /* background-image: linear-gradient(darkgrey, lightgray,darkgrey); */
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
  .Home-hot{
    display: flex;
    /* align-items: flex-start; */
    width: 100%;
    height: 98px;
    /* justify-content: space-around; */
    /* box-sizing: content-box; */
   }
   .Home-hot div{
     width: 100%;
     background-color: #F0F8FF;
     /* border-radius: 10px; */
     /* margin:0 10px; */
   }
   .Home-hot-one{
     margin-left: 10px;
     border-radius: 10px 0 0 10px;
      border-right:1px solid lavenderblush;
     box-sizing: border-box;
     /* flex: 1; */

   }
   .Home-hot-one div{
     display: flex;
   }
   .Home-hot-two div{
     display: flex;
   }
   .Home-hot p{
    font-weight: 500;
    padding-left: 20px;
    font-size: 15px;
    margin: 10px 0;
   }
   .Home-hot-two{
     /* flex: 1; */
      /* height: 0; */
     margin-right: 10px;
     border-radius:0 10px 10px 0;
   }
   .Home-hot a{
     display: inline-block;
     width: 0;
     flex: 1;
     overflow: hidden;
     display: flex;
     flex-direction: column;
   }
   .Home-hot a span{
     text-align: center;
   }
   .Home-hot img{
      width: 50px;
      margin:0 20px;
      background-size:100% 100%;
   }
</style>
