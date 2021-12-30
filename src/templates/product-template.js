import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const ProductTemplate = ({ data: { contentfulProduct } }) => {
  return (
    <Layout>
      <div
        style={{
          marginLeft: "0 auto",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Product Info */}
        <h2>{contentfulProduct.name}</h2> - <p>{contentfulProduct.price}</p>
        <span style={{ color: "#ccc" }}>
          Added on {contentfulProduct.createdAt}
        </span>
        <p>{contentfulProduct.description}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      price
      description
      createdAt(formatString: "MMM Do, YYY, h:mm:ss a")
    }
  }
`

export default ProductTemplate
