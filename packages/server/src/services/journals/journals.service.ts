// Initializes the `journals` service on path `/journals`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Journals } from "./journals.class";
import createModel from "../../models/journals.model";
import hooks from "./journals.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    "api/v1/journals": Journals & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: false,
    multi: ["create"]
  };

  // Initialize our service with any options it requires
  app.use("api/v1/journals", new Journals(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("api/v1/journals");

  service.hooks(hooks);
}
