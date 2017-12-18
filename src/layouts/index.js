import React from 'react'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      defaultTitle={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
      ]}
    />
    {children()}
  </div>
)

export default TemplateWrapper

export const query = graphql`
  query TitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`