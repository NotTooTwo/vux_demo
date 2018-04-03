import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
  // router.beforeEach(function (to, from, next) {
  //   store.commit('updateLoadingStatus', {isLoading: true})
  //   next()
  // }),
  // router.afterEach(function (to) {
  //   store.commit('updateLoadingStatus', {isLoading: false})
  // })
})
