const assert = require('assert')
const app = require('../../src/app')

describe('\'rows\' service', () => {
  it('registered the service', () => {
    const service = app.service('rows')

    assert.ok(service, 'Registered the service')
  })
})
