// Initializes the `activities` service on path `/activities`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Activities } from './activities.class';
import createModel from '../../models/activities.model';
import hooks from './activities.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'api/v1/activities': Activities & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi: ["create"]
  };

  // Initialize our service with any options it requires
  app.use('api/v1/activities', new Activities(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/v1/activities');

  service.hooks(hooks);
}
