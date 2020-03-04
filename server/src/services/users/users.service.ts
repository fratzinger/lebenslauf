// Initializes the `users` service on path `/users`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Users } from './users.class';
import createModel from '../../models/users.model';
import hooks from './users.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'api/v1/users': Users & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi: ["create"]
  };

  // Initialize our service with any options it requires
  app.use('api/v1/users', new Users(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/v1/users');

  service.hooks(hooks);
}
