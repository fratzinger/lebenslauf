import assert from 'assert';
import app from '../../src/app';

describe('\'publications\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/publications');

    assert.ok(service, 'Registered the service');
  });
});
