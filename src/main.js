// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import '@/assets/fundebug.js'
Vue.config.errorHandler = (err, vm, info) => {
  console.log(err.stack)
  console.log(vm)
  console.log(info)
}
// 滑动以及轮播图组件
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}
// 延迟加载
Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('./assets/img/bg-loading.png'),
  loading: require('./assets/img/bg-loading.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
