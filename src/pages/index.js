import React from 'react'
import Link from 'gatsby-link'

import './index.css'

const IndexPage = () => (
  <div>
    <div id="whatis">WHAT'S THE FUCKING<br />PRICE OF BITCOIN?</div>
    <div id="price">
      <span id="expletive">WAIT...</span>
      <br />
      <select></select>
      <span id="the-price"></span>
    </div>
    <div id="last-updated">Last updated: <span></span></div>

    <div id="buy">
      <a href="https://www.coinbase.com/join/irubnich">GO BUY SOME</a>
    </div>

    <div id="donate">
      1Dk8AnCLEPWCAAau8Tyb5BPTPBf9Zx1Yw4 &lt;3
    </div>
  </div>
)

export default IndexPage
