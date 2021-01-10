import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import {firestorePlugin} from 'vuefire'
import firebase from 'firebase'

Vue.use(firestorePlugin)
Vue.use(firebase)

import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
