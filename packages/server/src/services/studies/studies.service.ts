// Initializes the `studies` service on path `/studies`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Studies } from "./studies.class";
import createModel from "../../models/studies.model";
import hooks from "./studies.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    "api/v1/studies": Studies & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
    multi: ["create"]
  };

  // Initialize our service with any options it requires
  app.use("api/v1/studies", new Studies(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("api/v1/studies");

  service.hooks(hooks);
}
