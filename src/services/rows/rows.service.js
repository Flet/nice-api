// Initializes the `rows` service on path `/rows`
import { Rows } from './rows.class.js'
import hooks from './rows.hooks.js'

export default function (app) {
  const options = {
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/rows', new Rows(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('rows')

  service.hooks(hooks)
}
