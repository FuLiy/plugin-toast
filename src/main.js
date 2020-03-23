import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import Toast from './toast/toast'

Vue.config.productionTip = false
Vue.use(Toast)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
