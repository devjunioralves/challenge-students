import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import * as VeeValidate from 'vee-validate'
import VueMask from 'v-mask'
import store from './store'
import Vuex from 'vuex'
import VueSweetalert2 from "vue-sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css";

Vue.config.productionTip = false
Vue.prototype.$store = store;

Vue.use(VueSweetalert2)
Vue.use(VueMask)
Vue.use(Vuex)

new Vue({
  VeeValidate,
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
