import Vue from 'vue'
import App from './App.vue'
import  'lib-flexible/flexible'
import './veevalidata'
import store from './store'
import * as API from './api'
import {Button} from 'mint-ui'
import './mock/mockServer'

import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader.vue'
import CartControl from './components/CartControl/CartControl.vue'
Vue.config.productionTip = false
Vue.component('GshopHeader',GshopHeader)
Vue.component('CartControl',CartControl)
Vue.prototype.$API=API
Vue.component(Button.name,Button)
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  router,
  store
})