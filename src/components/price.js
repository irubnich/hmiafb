import React from 'react';
import styled from 'styled-components';

import CountrySelect from '../components/country_select'

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

class Price extends React.Component {
  constructor() {
    super()
    this.state = {
      price: 0,
      lastUpdated: "never",
      expletive: randomExpletive(),
    }
  }

  currencySelected(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <PriceWrapper>
        <div>{this.state.expletive}</div>
        <CountrySelect onChange={this.currencySelected} />
        <span>{this.state.price}</span>
        <LastUpdated>Last updated: {this.state.lastUpdated}</LastUpdated>
      </PriceWrapper>
    )
  }
}

export default Price