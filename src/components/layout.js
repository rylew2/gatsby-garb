/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"
import Header from "./header"
import "./layout.css"

const getSiteMetadata = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        author
        createdAt
      }
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(getSiteMetadata)
  console.log(data)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built by{" "}
          {data.site.siteMetadata?.author || `Title`}{" "}
          {data.site.siteMetadata?.createdAt}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
