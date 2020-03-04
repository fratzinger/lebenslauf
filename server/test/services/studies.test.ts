import assert from 'assert';
import app from '../../src/app';

describe('\'studies\' service', () => {
  it('registered the service', () => {
    const service = app.service('studies');

    assert.ok(service, 'Registered the service');
  });
});
