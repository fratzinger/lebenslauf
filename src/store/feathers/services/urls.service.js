import feathersClient, {
  makeServicePlugin
} from "../client";

import Model from "../models/urls.model";

const servicePath = "api/v1/urls";
const servicePlugin = makeServicePlugin({
  Model,
  namespace: "urls",
  service: feathersClient.service(servicePath),
  servicePath
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
