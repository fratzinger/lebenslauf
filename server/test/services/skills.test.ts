import assert from 'assert';
import app from '../../src/app';

describe('\'skills\' service', () => {
  it('registered the service', () => {
    const service = app.service('skills');

    assert.ok(service, 'Registered the service');
  });
});
