/* eslint-disable no-unused-vars */
import feathersClient, { makeAuthPlugin, models } from "@/store/feathers/client";

export default makeAuthPlugin(
  {
    serverAlias: "api",
    userService: "users",
    state: {},
    mutations: {},
    actions: {}
  }
);
