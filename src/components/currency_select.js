import React from 'react';
import styled from 'styled-components'

import arrow from './select-triangle.png'

const StyledSelect = styled.select`
  position: relative;
  bottom: 8px;

  margin: 0 12px 10px;
  border: 1px solid #CCC;
  background: transparent;
  width: 65px;
  padding: 5px 20px 5px 5px;
  font-size: 16px;
  height: 34px;
  appearance: none;
  background: url(${arrow}) 85% no-repeat;
  background-size: 12px;
`

export default ({ currencies, onChange }) => (
  <StyledSelect currencies={currencies} onChange={onChange}>
    {currencies.map((currency, i) => (
      <option key={i}>{currency}</option>
    ))}
  </StyledSelect>
)