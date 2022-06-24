import { Service } from 'feathers-memory'
import NotImplemented from '@feathersjs/errors'

export class Rows extends Service {
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
