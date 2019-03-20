<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
    <slot name="prev">
<!--       <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
    </slot>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'swiper'
    }
  },
  props: {
    swiperOption: {
      default () {
        return {}
      },
      type: Object
    }
  }
}
</script>
<style lang='scss'>
  @import '../assets/swiper.min';
  .swiper-container {
    min-height: 140px;
    /*overflow: auto;*/
    overflow: hidden;
    .swiper-pagination{
      width: 100%;
    }
    &>.swiper-pagination-bullets {
      margin-bottom: 0px;
    }
    .swiper-pagination-bullet {
      height: 2px;
      width: 16px;
      border-radius: 6px;
      opacity: 1;
      /*border: 1px solid #13BED3;*/
      /*background-color: #fff;*/
      margin-left: 4px;
      margin-right: 4px;
      background-color: white;
      opacity: .5;
    }
    .swiper-pagination-bullet-active {
      background-color: #13BED3!important;
      opacity: 1;
      /*border-bottom: 1px solid #000;*/
    }
    .swiper-slide{
      text-align: center;
      img{
        display: inline-block;
        /*max-width: 750px;*/
        /*max-height: 500px;*/
      }
    }
    .swiper-container-android {
      .swiper-slide {
        text-align: center;
      }
    }
    .swiper-button-disabled {
      display: none;
    }
    .swiper-button-prev{
      // background-image: url(../assets/img/category/prev.png);
      // height: 80px;
      // width: 30px;
      // background-size: 90%;
      // opacity: 0.3;
      // &:hover{
      //   opacity: 1;
      // }
      display: none;
    }
    .swiper-button-next{
      display: none;
      // background-image: url(../assets/img/category/next.png);
      // height: 80px;
      // width: 30px;
      // background-size: 90%;
      // opacity: 0.3;
      // &:hover{
      //   opacity: 1;
      // }
    }
  }
  .swiper-wrapper {
    height: auto!important;
  }
</style>
