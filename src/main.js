import Vue from 'vue'
import App from './App.vue'
// bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// end bootstrap

// axios parameters
import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`
};

export const apiClient = axios.create({
  headers
});
//end axios parameters

// router parameters
import VueRouter from 'vue-router';
import { routes } from './routes';
// end router params

Vue.config.productionTip = false

// ROUTER PARAMETERS
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
});
// END ROUTER PARAMETERS

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
