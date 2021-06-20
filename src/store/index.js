import { createStore, createLogger } from "vuex";
import test from "./modules/test";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  // state: {
  //   count: 0
  // },
  // mutations: {
  //   add (state) {
  //     state.count++
  //   }
  // },
  // actions: {
  //   add: ({ commit }) => commit('add')
  // },
  // getters: {},
  modules: {
    test,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  devtools: debug,
});
