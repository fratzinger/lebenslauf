// Initializes the `characteristics` service on path `/characteristics`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Characteristics } from "./characteristics.class";
import createModel from "../../models/characteristics.model";
import hooks from "./characteristics.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    "api/v1/characteristics": Characteristics & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
    multi: ["create"]
  };

  // Initialize our service with any options it requires
  app.use("api/v1/characteristics", new Characteristics(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("api/v1/characteristics");

  service.hooks(hooks);
}
