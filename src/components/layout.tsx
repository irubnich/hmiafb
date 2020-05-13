import React from 'react'
import {ReactNode} from 'react'
import {Helmet} from 'react-helmet'

export default ({ children }: { children: ReactNode }) => {
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
