// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMDCAdapter from 'vue-mdc-adapter'
import BootstrapVue from 'bootstrap-vue'



import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueMDCAdapter)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
window.App = new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
