import * as types from "../mutation-types";
const state = () => ({
  count: 0,
});

const getters = {};

const mutations = {
  [types.ADD](state) {
    state.count++;
  },
};

const actions = {
  [types.ADD]({ commit }) {
    commit(types.ADD);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
