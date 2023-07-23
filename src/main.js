import Vue from 'vue'
import App from './App.vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// // Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)

import VueTailwind from 'vue-tailwind'


Vue.use(VueTailwind)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


// import VueRouter from 'vue-router';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Optionally install the BootstrapVue icon components plugin

import router from './router';

import './assets/tailwind.css'
// Vue.use(VueRouter);
Vue.config.productionTip = false
import CKEditor from "@ckeditor/ckeditor5-vue2";
Vue.use(CKEditor);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
