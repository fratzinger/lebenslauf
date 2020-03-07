import assert from 'assert';
import app from '../../src/app';

describe('\'characteristics\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/characteristics');

    assert.ok(service, 'Registered the service');
  });
});
