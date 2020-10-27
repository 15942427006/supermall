import Vue from 'vue'
import App from './components/App'
import router from './router/index.js'
import store from './store/index.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

