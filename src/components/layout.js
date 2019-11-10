import React from 'react'
import Helmet from 'react-helmet'

export default ({ children }) => {
  const title = "HOW MUCH IS A FUCKING BITCOIN?"

  return (
    <div>
      <Helmet
        titleTemplate={`%s | ${title}`}
        defaultTitle={title}
        meta={[
          { name: 'description', content: '' },
          { name: 'keywords', content: '' },
        ]}
      />
      {children}
    </div>
  )
}
