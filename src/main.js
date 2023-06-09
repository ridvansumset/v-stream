import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { IconsPlugin, ModalPlugin, PopoverPlugin, VBHover } from 'bootstrap-vue'
import '@/styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(IconsPlugin)
Vue.use(ModalPlugin)
Vue.use(PopoverPlugin)
Vue.directive('b-hover', VBHover)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
