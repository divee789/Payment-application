import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import router from "./router";
import store from "./store/store";
import AOS from "aos";
import "aos/dist/aos.css";
import "./registerServiceWorker";

window.$ = require("jquery");
window.JQuery = require("jquery");

Vue.use(VueResource);

Vue.config.productionTip = false;
Vue.config.devTools = true;

//Vue.http.options.root = 'https://payment-app-123.firebaseio.com/';



new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");