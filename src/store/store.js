import Vue from "vue";
import Vuex from "vuex";
import userDetails from "./modules/userDetails";

// import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  // actions,
  modules: {
    userDetails
}
});
