const rows = require('./rows/rows.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(rows)
}
