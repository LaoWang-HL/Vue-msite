import Vue from 'vue'
import App from './App.vue'
import  'lib-flexible/flexible'
import store from './store'

import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader.vue'

Vue.config.productionTip = false
Vue.component('GshopHeader',GshopHeader)

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