import assert from 'assert';
import app from '../../src/app';

describe('\'urls\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/urls');

    assert.ok(service, 'Registered the service');
  });
});
