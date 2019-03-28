import Vue from 'vue'
import Router from 'vue-router'
const GameSort = () => import('../views/gameSort/index.vue')
const notFound = () => import('../views/notFound/index.vue')
const test = () => import('../views/test/index.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/go',
      name: 'GameSort',
      component: GameSort,
      children: [
        {
          path: '404',
          name: 'notFound',
          component: notFound
        },
        {
          path: 'test',
          name: 'test',
          component: test
        }
      ]
    }
  ]
})
