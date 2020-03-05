import assert from 'assert';
import app from '../../src/app';

describe('\'journals\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/journals');

    assert.ok(service, 'Registered the service');
  });
});
