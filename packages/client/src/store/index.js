import Vue from "vue";
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
    ]
  });

  return Store;
}
