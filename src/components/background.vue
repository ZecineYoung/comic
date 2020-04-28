<template>
  <div>
    <div>
      <div class="title">动漫鉴赏</div>
      <div class="pic-innner">
        <div class="bottom-top pic">
          <img src="../../static/image/1.jpg" />
        </div>
        <div class="pic">
          <img src="../../static/image/1.jpg" />
        </div>
        <div class="pic">
          <img src="../../static/image/1.jpg" />
        </div>
        <div class="pic-double">
          <div><img src="../../static/image/1.jpg" /></div>
          <div><img src="../../static/image/1.jpg" /></div>
        </div>
        <div class="pic">
          <img src="../../static/image/1.jpg" />
        </div>
        <div class="pic">
          <img src="../../static/image/1.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .title{
    text-align: center;
    font-size: 28px;
    font-weight: 700;
  }
  .pic-innner{
    padding-left: 10px;
    padding-right: 10px;
  }
  .bottom-top{
    margin-top: 50px;
  }
  .pic{
    padding-top: 5px;
  }
  .pic img{
    max-width: 100%;
  }
  .pic-double{
    display: flex;
      width:100%
  }
  .pic-double img{
    width: 100%;
    background-size: 100% 100%;
  }
  .pic-double div:nth-child(1){
    margin-right: 2px;
  }
  .pic-double div:nth-child(2){
    margin-left: 2px;
  }


</style>
