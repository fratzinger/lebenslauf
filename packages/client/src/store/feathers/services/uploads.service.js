import feathersClient, {
  makeServicePlugin,
  host
} from "../client";

import Model from "../models/uploads.model";

const servicePath = "api/v1/uploads";
const servicePlugin = makeServicePlugin({
  Model,
  service: feathersClient.service(servicePath),
  servicePath,
  state: {
    host,
    folder: "uploads"
  },
  getters: {
    profilePic(state, getters) {
      const result = `${state.host}/${state.folder}/profilePic.jpg`;
      return result;
    }
  }
});

feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
});

export default servicePlugin;
