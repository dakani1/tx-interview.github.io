import Vue from 'vue'
import Router from 'vue-router'
const GameSort = () => import('../views/gameSort/index.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GameSort',
      component: GameSort
    }
  ]
})
