import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$api = api
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
