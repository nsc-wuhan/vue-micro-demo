const getters = {};

const mutations = {
  updateAge(state, payload) {
    state.age = payload;
  },
  REDUCE(state, payload) {
    state.age = payload;
  },
  resetState(state, payload) {},
  updateParentData(state, payload) {
    console.log("run updateParentData", payload);
    state.parentData = payload;
  },
};

const actions = {
  logout(context, payload) {
    console.log("context", context);
    context.commit("resetState");
  },
};

export const initState = () => ({
  name: "kevin",
  age: 28,
  company: "nsc",
  id: "0001",
  parentData: {},
});

export default {
  namespaced: true,
  state: initState,
  getters,
  mutations,
  actions,
};
