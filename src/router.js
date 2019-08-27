import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue'
import Neck from './components/Neck.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Neck
        }
      ]
    }
  ]
})
