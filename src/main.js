import Vue from 'vue'
import App from './App.vue'

Vue.filter('toTitle', (text) => text.toUpperCase());

new Vue({
  el: '#app',
  render: h => h(App)
})

// Init material-components-web
mdc.autoInit();
