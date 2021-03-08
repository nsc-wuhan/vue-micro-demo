import Vue from 'vue';
import Vuex from 'vuex';
import userModule, { initState as initUserState } from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { userModule },
  strict: true,
  state: {
    token: 'abcd',
  },
  actions: {
    resetAllState() {},
  },
  mutations: {
    resetState(state) {
      this.replaceState({
        userModule: initUserState(),
      });
    },
  },
});
