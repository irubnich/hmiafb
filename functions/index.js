// Firebase
const functions = require('firebase-functions')

// Libraries
const axios = require('axios')
const cors = require('cors')({ origin: 'https://howmuchisafuckingbitcoin.com' })

exports.getExchangeRates = functions.https.onRequest((req, res) => {
  axios.get("https://api.coinbase.com/v2/exchange-rates?currency=BTC").then(coinbaseResponse => {
    cors(req, res, () => {
      res.status(200).send(coinbaseResponse.data)
    })
  })
})
