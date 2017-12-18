import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import Helmet from 'react-helmet'

import { toPrice, randomElement } from '../utils'
import CurrencySelect from '../components/currency_select'

const PriceWrapper = styled.div`
  margin: 40px 0 40px;
`

const LastUpdated = styled.div`
  margin-top: 6px;
  font-size: 10px;
`

const EXPLETIVES = [
  "GODDAMN SON IT'S FUCKING",
  "HOLY SHIT IT'S FUCKING",
  "SWEET JESUS IT'S FUCKING",
  "GET THE FUCK OUT OF HERE IT'S",
]

const CLOUD_FUNCTION_URL = "https://us-central1-how-much-is-a-fucking-bitcoin.cloudfunctions.net/getExchangeRates"

class Price extends React.Component {
  constructor() {
    super()

    this.state = {
      currency: "USD",
      price: "HOLD ON",
      lastUpdated: "HAVE SOME DAMN PATIENCE",
      expletive: "WAIT..."
    }

    // Start off with USD
    this.updateValue("USD")

    // Polling
    setInterval(() => this.updateValue(this.state.currency), 30000)
  }

  handleChange(event) {
    this.updateValue(event.target.value)
  }

  updateValue(currency) {
    const key = `btc_to_${currency.toLowerCase()}`

    axios.get(CLOUD_FUNCTION_URL).then(response => {
      const value = toPrice(parseFloat(response.data[key]))
      const date = new Date().toString()

      this.setState({
        currency: currency,
        price: value,
        lastUpdated: date,
        expletive: randomElement(EXPLETIVES),
      })
    })
  }

  render() {
    return (
      <PriceWrapper>
        <div>{this.state.expletive}</div>
        <CurrencySelect onChange={this.handleChange.bind(this)} />
        <span>{this.state.price}</span>
        <LastUpdated>Last updated: {this.state.lastUpdated}</LastUpdated>

        <Helmet
          title={`${this.state.price} ${this.state.currency}`}
        />
      </PriceWrapper>
    )
  }
}

export default Price