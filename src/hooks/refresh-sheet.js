// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const camelCase = require('camelcase')
const { GoogleSpreadsheet } = require('google-spreadsheet')

const cache = {
  lastRefresh: 0
}

module.exports = (options = {}) => {
  return async context => {
    await fetchAndParseSheet(context)
    return context
  }
}

async function fetchAndParseSheet (context) {
  const cacheTtl = context.app.get('sheetCacheTtl')

  const now = new Date().getTime()
  if (now - cache.lastRefresh < cacheTtl) {
    return
  }
  cache.lastRefresh = now

  // fetch doc
  const doc = new GoogleSpreadsheet(context.app.get('sheetId'))
  doc.useApiKey(context.app.get('apiKey'))
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0]
  const rows = await sheet.getRows()

  // massage data to fit expected shape
  const data = rows.filter(row => !!row[sheet.headerValues[0]]).reduce((obj, row, index) => {
    const rowData = sheet.headerValues.reduce((p, key) => {
      p.id = index
      p[camelCase(key).replace(/[^a-zA-Z]+/g, '')] = row[key] ? row[key].trim() : undefined
      return p
    }, {})
    obj[rowData.id] = rowData
    return obj
  }, {})

  context.service.store = data
}
