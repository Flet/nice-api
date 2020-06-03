const { Service } = require('feathers-memory')
const { NotImplemented } = require('@feathersjs/errors')

exports.Rows = class Rows extends Service {
  async update (id, data, params) {
    throw new NotImplemented()
  }

  async patch (id, data, params) {
    throw new NotImplemented()
  }

  async remove (id, params) {
    throw new NotImplemented()
  }
}
