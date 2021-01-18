import Vue from 'vue'
import App from './App.vue'
import router from './router'



Vue.config.productionTip = false

window.data = require('./data.json');


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
