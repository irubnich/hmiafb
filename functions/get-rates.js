const https = require('https');

exports.handler = function(event, context, callback) {
  https.get("https://api.coinbase.com/v2/exchange-rates?currency=BTC", clientRes => {
    clientRes.setEncoding('utf-8')
    let rawData = ''
    clientRes.on('data', chunk => {
      rawData += chunk
    })
    clientRes.on('end', () => {
      callback(null, {
        statusCode: 200,
        body: rawData
      })
    })
  })
}
