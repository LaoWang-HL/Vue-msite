import Vue from 'vue'
import App from './App.vue'
import  'lib-flexible/flexible'
import './veevalidata'
import store from './store'
import * as API from './api'

import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader.vue'

Vue.config.productionTip = false
Vue.component('GshopHeader',GshopHeader)
Vue.prototype.$API=API
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