module.exports = {
  siteMetadata: {
    title: `HOW MUCH IS A FUCKING BITCOIN?`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-33836016-2",
      },
    },
  ],
}
