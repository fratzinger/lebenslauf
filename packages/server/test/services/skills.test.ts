import assert from 'assert';
import app from '../../src/app';

describe('\'skills\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/skills');

    assert.ok(service, 'Registered the service');
  });
});
