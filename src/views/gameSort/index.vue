<template>
  <div class="game-sort-content">
    <nav-list></nav-list>
    <div class='banner' v-lazy:background-image="bannerBg" @click='one'>
      <div class="banner-desc spaceBetween">
        <a href='javascript: void(0);' class="banner-item">
          <h3 class='oneLine'>企鹅电竞杯竞技大礼</h3>
          <p class='twoLine'>王者荣耀</p>
        </a>
        <a href='javascript: void(0);' class="banner-item">
          <h3 class='oneLine'>连续签到领取888金币</h3>
          <p class='twoLine'>火影忍者</p>
        </a>
      </div>
    </div>
    <router-link tag='a' to='/go/404'>404</router-link>
    <router-link tag='a' to='/go/test'>test</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <keep-alive> -->
      <!-- <component :is='itemList'></component> -->
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import NavList from './navList.vue'
import ItemList from './ItemList.vue'
export default {
  name: 'gameSort',
  data () {
    return {
      bannerBg: 'https://dakani1.github.io/interview.github.io/static/img/banner@3x.8bf886d.png',
      msg: 'gaa',
      itemList: 'item-list'
    }
  },
  created () {
    console.log(this._isMounted)
  },
  async mounted () {
    console.log(999)
  },
  methods: {
    one () {
      // console.log(66666)
      // console.log(this.gaa)
      // new Promise((resolve, reject) => {
      //   reject(aaaaa)
      // })
    },
    two () {
      return new Promise((resolve, reject) => {
        resolve(22222)
      })
    }
  },
  components: {
    'item-list': ItemList,
    'nav-list': NavList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/assets/var.scss';
.banner{
  background: url('~@/assets/img/banner@3x.png') center top no-repeat;
  background-size: 100%;
  .banner-desc{
    text-align: left;
    align-items: stretch;
    // flex-grow: 1;
    .banner-item{
      flex: 1;
      padding: 230px 28px 40px;
      border-bottom: 1px dotted $borderColor;
      h3{
        font-size: 32px;
        font-weight: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: $titleColor;
      }
      p{
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.1;
        color: $subTitleColor;
        margin-top: 15px;
      }
      & + .banner-item{
        border-left: 1px dotted $borderColor;
      }
    }
  }
}

</style>
