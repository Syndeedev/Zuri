import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import AOS from "aos";
import "aos/dist/aos.css";
// import vue_intersect from 'vue-intersect'

Vue.config.productionTip = false

new Vue({
  vuetify,
  created() {
    AOS.init();
  },
  // vue_intersect,
  render: h => h(App)
}).$mount('#app')
