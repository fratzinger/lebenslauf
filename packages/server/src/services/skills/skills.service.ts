// Initializes the `skills` service on path `/skills`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Skills } from './skills.class';
import createModel from '../../models/skills.model';
import hooks from './skills.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'api/v1/skills': Skills & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi: ["create"]
  };

  // Initialize our service with any options it requires
  app.use('api/v1/skills', new Skills(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/v1/skills');

  service.hooks(hooks);
}
