import feathersClient, {
  makeServicePlugin
} from "../client";

import Model from "../models/activities.model";

const servicePath = "api/v1/activities";
const servicePlugin = makeServicePlugin({
  Model,
  servicePath,
  namespace: "activities",
  service: feathersClient.service(servicePath)
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
