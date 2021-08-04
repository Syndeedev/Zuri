import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import vue_intersect from 'vue-intersect'

Vue.config.productionTip = false

new Vue({
  vuetify,
  // vue_intersect,
  render: h => h(App)
}).$mount('#app')
