import Vue from "vue";

import "prismjs";
import "prismjs/themes/prism.css";
//import "prism-themes/themes/prism-atom-dark.css";

import Vuex from "vuex";

Vue.use(Vuex);

//#region feathers

import { FeathersVuex } from "feathers-vuex";

Vue.use(FeathersVuex);

const req = require.context("./feathers/services", false, /.js$/);
const servicePlugins = req.keys().map(path => req(path).default);

import auth from "./feathers/auth";

//#endregion

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [
      ...servicePlugins,
      auth
    ],
    state: {},
    getters: {
      profilePic: (state, getters) => {
        const characterstics = getters["characteristics/find"]({ query: { name: "photoSquare" } }).data;
        if (characterstics.length !== 1) return null;
        const host = state.uploads.host;
        const path = state.uploads.servicePath;
        console.log(host, path);
        return characterstics[0].value;
      }
    },
    mutations: {},
    actions: {}
  });

  return Store;
}
