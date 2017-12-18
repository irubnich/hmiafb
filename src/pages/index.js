import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 100px;
  font-family: sans-serif;
  text-align: center;
  font-size: 45px;
`

const Title = styled.div`
  font-size: 60px;
`

const Price = styled.div`
  margin-top: 40px;
`

const LastUpdated = styled.div`
  margin-top: 6px;
  font-size: 10px;
`

const BuyLink = styled.div`
  margin-top: 40px;
  font-size: 18px;
`

const Donate = styled.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
  font-size: 10px;
`

const IndexPage = () => (
  <Wrapper>
    <Title>WHAT'S THE FUCKING<br />PRICE OF BITCOIN?</Title>
    <Price>
      <span id="expletive">WAIT...</span>
      <br />
      <select></select>
      <span id="the-price"></span>
    </Price>
    <LastUpdated>Last updated: <span></span></LastUpdated>

    <BuyLink>
      <a href="https://www.coinbase.com/join/irubnich">GO BUY SOME</a>
    </BuyLink>

    <Donate>
      1Dk8AnCLEPWCAAau8Tyb5BPTPBf9Zx1Yw4 &lt;3
    </Donate>
  </Wrapper>
)

export default IndexPage
