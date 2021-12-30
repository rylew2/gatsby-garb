import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"
import gatsbyIcon from "../images/gatsby-icon.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* Title / Logo  */}
      <span style={{ display: "flex", alignItems: "center" }}>
        {/* Images in gatsby are processed by webpack */}
        {/* folders in ./static can have images that can be used outside of webpack */}
        <img
          src={gatsbyIcon}
          alt="gatsby garb logo"
          style={{
            width: "50px",
            margin: "0 5px",
            border: "3px solid orange",
            borderRadius: "50%",
          }}
        />
      </span>

      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
