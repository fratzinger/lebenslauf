// Initializes the `publications` service on path `/publications`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Publications } from "./publications.class";
import createModel from "../../models/publications.model";
import hooks from "./publications.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    "api/v1/publications": Publications & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: false,
    multi: ["create"]
  };

  // Initialize our service with any options it requires
  app.use("api/v1/publications", new Publications(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("api/v1/publications");

  service.hooks(hooks);
}
