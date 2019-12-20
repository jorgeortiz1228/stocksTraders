import Vue from 'vue'
//import vuerouter and then vue.use it
import VueRouter from 'vue-router';
//import vue-resource
//install in terminal with
//npm install --save vue-resource
import VueResource from 'vue-resource'
import App from './App.vue'
//import routes from routes.js
import { routes } from './routes';
import store from './store/store';

//require('dotenv').config();

Vue.use(VueRouter);
Vue.use(VueResource);

var fireBaseUrl = config.FB_URL;

Vue.http.options.root = fireBaseUrl;


Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

//set up the router
const router = new VueRouter ({
  mode: 'history',
  routes
});

//add router to Vue app
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
