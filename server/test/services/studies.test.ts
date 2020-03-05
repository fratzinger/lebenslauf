import assert from 'assert';
import app from '../../src/app';

describe('\'studies\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/studies');

    assert.ok(service, 'Registered the service');
  });
});
