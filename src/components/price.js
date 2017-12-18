import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

import CurrencySelect from '../components/currency_select'

const PriceWrapper = styled.div`
  margin: 40px 0 40px;
`

const LastUpdated = styled.div`
  margin-top: 6px;
  font-size: 10px;
`

const expletives = [
  "GODDAMN SON IT'S FUCKING",
  "HOLY SHIT IT'S FUCKING",
  "SWEET JESUS IT'S FUCKING",
  "GET THE FUCK OUT OF HERE IT'S",
]

const randomExpletive = () => expletives[Math.floor(Math.random() * expletives.length)]

const cloudFunctionURL = "https://us-central1-how-much-is-a-fucking-bitcoin.cloudfunctions.net/getExchangeRates"

const toPrice = (price) => {
  return price.valueOf().toFixed(2).replace(/./g, (c, i, a) => {
	   return i && c !== "." && !((a.length - i) % 3) ? "," + c : c;
   })
}

class Price extends React.Component {
  constructor() {
    super()
    this.state = {
      price: 0,
      lastUpdated: "never",
      expletive: randomExpletive(),
    }

    this.currencySelected = this.currencySelected.bind(this)
  }

  currencySelected(event) {
    const key = `btc_to_${event.target.value.toLowerCase()}`

    axios.get(cloudFunctionURL).then(response => {
      const value = toPrice(parseFloat(response.data[key]))
      const date = new Date().toString()

      this.setState({
        price: value,
        lastUpdated: date,
        expletive: randomExpletive(),
      })
    })
  }

  render() {
    return (
      <PriceWrapper>
        <div>{this.state.expletive}</div>
        <CurrencySelect onChange={this.currencySelected} />
        <span>{this.state.price}</span>
        <LastUpdated>Last updated: {this.state.lastUpdated}</LastUpdated>
      </PriceWrapper>
    )
  }
}

export default Price