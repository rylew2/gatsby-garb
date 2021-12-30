import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const Products = ({ data: { allContentfulProduct } }) => {
  return (
    <Layout>
      <div>
        {/* Products List */}
        {allContentfulProduct.edges.map(({ node: product }) => {
          return (
            <div key={product.id}>
              <h2>Grab Products</h2>
              <Link to={`/products/${product.slug}`}>
                <h3>{product.name}</h3>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
        }
      }
    }
  }
`

export default Products
