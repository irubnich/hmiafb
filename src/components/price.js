import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet'

import CurrencySelect from './currency-select'

import { toPrice, randomElement } from '../utils'

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

class Price extends React.Component {
  constructor() {
    super()

    this.state = {
      currencies: ["USD"],
      currency: "USD",
      price: "HOLD ON",
      lastUpdated: "HAVE SOME DAMN PATIENCE",
      expletive: "WAIT...",
    }
  }

  componentDidMount() {
    // Start off with USD 🇺🇸 🦅
    this.updateValue("USD")

    // Polling
    setInterval(() => this.updateValue(this.state.currency), 30000)
  }

  handleChange(event) {
    this.updateValue(event.target.value)
  }

  async updateValue(currency) {
    const response = await fetch('/.netlify/functions/get-rates')

    const data = await response.json()

    // Load currencies from the Coinbase API but move USD to the first position
    const currencies = Object.keys(data.data.rates).filter(currency => currency !== "USD")
    currencies.unshift("USD")

    const value = toPrice(parseFloat(data.data.rates[currency]))
    const date = new Date().toString()

    this.setState({
      currencies: currencies,
      currency: currency,
      price: value,
      lastUpdated: date,
      expletive: randomElement(EXPLETIVES),
    })
  }

  render() {
    return (
      <PriceWrapper>
        <div>{this.state.expletive}</div>
        <CurrencySelect currencies={this.state.currencies} onChange={this.handleChange.bind(this)} />
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