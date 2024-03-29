const dotenv = require("dotenv")

// if (process.env.NODE_ENV !== "production") {

// }
dotenv.config()
module.exports = {
  siteMetadata: {
    title: `Gatsby Garb`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@Rylew`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    createdAt: "2021",
  },
  plugins: [
    //in general - plugins allow us to bring data into gatsby build
    //transformer plugins - get data and transform data (turns markdown into html)
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // allow gatsby to access images in the src/images folder
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`, //transformer plugin
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // allow gatsby to access images in the src/images folder
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
