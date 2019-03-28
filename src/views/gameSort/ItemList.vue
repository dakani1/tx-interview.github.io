<template>
  <div class="gameList" v-lazy-container="{ selector: 'img' }">
    <div class="game-item spaceBetween">
      <div class='game-item-info spaceLeft'>
        <img :data-src="require('@/assets/img/i128(1).png')" alt="">
        <div class='game-item-desc text-left'>
          <h3 class='oneLine'>纪念碑谷</h3>
          <p class='oneLine'>艺术品级的解谜游戏</p>
        </div>
      </div>
      <a href='javascript: void(0);'>下载</a>
    </div>
    <div class="game-item spaceBetween">
      <div class='game-item-info spaceLeft'>
        <img :data-src="require('@/assets/img/i272@3x.png')" alt="">
        <!-- <img src="@/assets/img/i272@3x.png" alt=""> -->
        <div class='game-item-desc text-left'>
          <h3 class='oneLine'>头脑特工队:泡泡乐</h3>
          <p class='oneLine'>迪士尼满分泡泡龙</p>
        </div>
      </div>
      <a href='javascript: void(0);'>下载</a>
    </div>
    <div class="game-item spaceBetween">
      <div class='game-item-info spaceLeft'>
        <img :data-src="require('@/assets/img/i272(1)@3x.png')" alt="">
        <div class='game-item-desc text-left'>
          <h3 class='oneLine'>城堡突袭2</h3>
          <p class='oneLine'>年度塔防 不得不玩</p>
        </div>
      </div>
      <a href='javascript: void(0);'>下载</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>

<style lang='scss' scoped>
@import '~@/assets/var.scss';
.gameList{
  .game-item{
    padding: 14px 30px;
    border-bottom: 1px dotted $borderColor;
    .game-item-info{
      flex: 1;
      &>img{
        width: 128px;
        height: 128px;
      }
      .game-item-desc{
        flex: 1;
        padding-left: 20px;
        h3{
          font-size: 32px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.1;
          letter-spacing: 0px;
          color: $titleColor;
          overflow: hidden;
        }
        p {
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 29px;
          letter-spacing: 0px;
          color: #a6a6a6;
          margin-top: 13px;
        }
      }
    }
    a{
      display: block;
      width: 112px;
      height: 60px;
      line-height: 60px;
      border-radius: 5px;
      border: 1px solid #cacccd;
      background-image: linear-gradient(to bottom, #ffffff, #fafafa);
      background-image: -webkit-linear-gradient(to bottom, #ffffff, #fafafa);
      font-size: 28px;
      color: #5b5b5b;
      margin-left: 15px;
      // background: url('~@/assets/img/download@3x.png') center center no-repeat;
      // background-size: 100%;
      img{
        max-width: 100%;
      }
    }
  }
}
</style>
