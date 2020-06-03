module.exports = {
  host: 'localhost',
  port: 3030,
  public: '../public/',
  paginate: {
    default: 50,
    max: 1000
  },
  sheetCacheTtl: 1000 * 60 * 5, // 5 minutes
  apiKey: 'API_KEY',
  sheetId: 'SHEET_ID'
}
