<template>
  <div class='nav-list-content'>
    <nav class='navList'>
      <div class="navListWrap" ref='navListWrap' v-if="navList.length > 0">
        <slider-common v-if="navList.length > swiperOption.slidesPerView" :swiperOption ='swiperOption' style="width: 100%;">
          <dl :class="{'nav-item': true, active: active === key, 'swiper-slide': true}" v-for='(item, key) in navList' :key='key'>
            <dt><img style='width: 60px;' :src="item.iconSrc || ''" alt=""></dt>
            <dd>{{item.sortName || ''}}</dd>
          </dl>
        </slider-common>
        <div v-else class='noScroll spaceLeft'>
          <dl :class="{'nav-item': true, active: active === key, 'swiper-slide': true}" v-for='(item, key) in navList' :key='key'>
            <dt><img style='width:60px;' :src="item.iconSrc || ''" alt=""></dt>
            <dd>{{item.sortName || ''}}</dd>
          </dl>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import SliderCommon from '../../components/slider.vue'
export default {
  data () {
    return {
      active: 0,
      navList: [
        {
          iconSrc: require('@/assets/img/charactor@3x.png'),
          sortName: '角色'
        },
        {
          iconSrc: require('@/assets/img/play@3x.png'),
          sortName: '休闲'
        },
        {
          iconSrc: require('@/assets/img/standAlone@3x.png'),
          sortName: '单机'
        },
        {
          iconSrc: require('@/assets/img/card@3x.png'),
          sortName: '棋牌'
        },
        {
          iconSrc: require('@/assets/img/action@3x.png'),
          sortName: '动作'
        },
        {
          iconSrc: require('@/assets/img/shoot@3x.png'),
          sortName: '射击'
        }
      ],
      swiperOption: {
        slidesPerView: 6,
        freeMode: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        autoHeight: true
      }
    }
  },
  components: {
    'slider-common': SliderCommon
  }
}
</script>

<style lang='scss' scoped>
@import '~@/assets/var.scss';
.navList{
  width: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  .navListWrap{
    // width: 100%;
    font-size: 0;
    text-align: left;
    dl{
      // width: 125px;
      position: relative;
      padding: 22px 0;
      border-bottom: 1px dotted $borderColor;
      display: inline-block;
      &.active:after{
        content: ' ';
        display: block;
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: $activeColor;
      }
      dt{
        height: 48px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 18px;
      }
      dd{
        font-size: 22px;
        line-height: 29px;
        letter-spacing: 0px;
        color: $subTitleColor;
        text-align: center;
      }
    }
  }
  .noScroll{
    dl {
      width: 125px;
    }
  }
}
</style>
