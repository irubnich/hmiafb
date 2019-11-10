import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet'

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

class Price extends React.Component {
  constructor() {
    super()

    this.state = {
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
    const value = this.toPrice(parseFloat(data.data.rates[currency]))
    const date = new Date().toString()

    this.setState({
      currency: currency,
      price: value,
      lastUpdated: date,
      expletive: this.randomElement(EXPLETIVES),
    })
  }

  // Gets a random element from an array
  randomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
  }

  // Converts a float into a "formtted price", e.g "18000.00" => "18,000.00"
  toPrice(price) {
    return price.valueOf().toFixed(2).replace(/./g, (c, i, a) => {
      return i && c !== "." && !((a.length - i) % 3) ? "," + c : c;
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