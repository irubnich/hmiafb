import React from 'react'
import styled from 'styled-components';

import Price from '../components/price'

const Wrapper = styled.div`
  margin-top: 100px;
  font-family: sans-serif;
  text-align: center;
  font-size: 45px;
`

const Title = styled.div`
  font-size: 60px;
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

    <Price />

    <BuyLink>
      <a href="https://www.coinbase.com/join/irubnich">GO BUY SOME</a>
    </BuyLink>

    <Donate>
      1Dk8AnCLEPWCAAau8Tyb5BPTPBf9Zx1Yw4 &lt;3
    </Donate>
  </Wrapper>
)

export default IndexPage
