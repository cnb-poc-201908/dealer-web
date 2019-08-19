import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment';
import _ from 'lodash'
import VueCurrencyFilter from 'vue-currency-filter'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.prototype.$moment = moment;

Vue.config.productionTip = false

Vue.use(VueCurrencyFilter,
{
  symbol: '￥',
  thousandsSeparator: ',',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})

import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
