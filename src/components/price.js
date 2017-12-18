import React from 'react';
import styled from 'styled-components';

import CountrySelect from '../components/country_select'

const PriceWrapper = styled.div`
  margin-top: 40px;
`

const LastUpdated = styled.div`
  margin-top: 6px;
  font-size: 10px;
`

class Price extends React.Component {
  currencySelected(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <PriceWrapper>
        <span id="expletive">WAIT...</span>
        <br />
        <CountrySelect onChange={this.currencySelected} />
        <span id="the-price"></span>
        <LastUpdated>Last updated: <span></span></LastUpdated>
      </PriceWrapper>
    )
  }
}

export default Price