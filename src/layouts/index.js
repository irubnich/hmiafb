import React from 'react'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="WHAT'S THE FUCKING PRICE OF BITCOIN?"
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
      ]}
    />
    {children()}
  </div>
)

export default TemplateWrapper
