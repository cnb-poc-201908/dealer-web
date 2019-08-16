import Vue from 'vue'
import Router from 'vue-router'
import Unconfirmed from './views/Unconfirmed.vue'
import Unpaid from './views/Unpaid.vue'
import Paid from './views/Paid.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    redirect: '/unconfirmed/1'
  },
  {
    path: '/unconfirmed',
    name: 'unconfirmed',
    component: Unconfirmed
  },
  {
    path: '/unpaid',
    name: 'unpaid',
    component: Unpaid
  },
  {
    path: '/paid',
    name: 'paid',
    component: Paid

  }]
})
