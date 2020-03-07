// Initializes the `jobs` service on path `/jobs`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Jobs } from "./jobs.class";
import createModel from "../../models/jobs.model";
import hooks from "./jobs.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    "api/v1/jobs": Jobs & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
    multi: ["create"]
  };

  // Initialize our service with any options it requires
  app.use("api/v1/jobs", new Jobs(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("api/v1/jobs");

  service.hooks(hooks);
}
