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
              <Link
                to={`/products/${product.slug}`}
                style={{ textDecoration: "none", color: "#551a8b" }}
              >
                <h3>
                  {product.name}{" "}
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "300",
                      color: "#f60",
                    }}
                  >
                    {product.price}
                  </span>
                </h3>
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
          price
        }
      }
    }
  }
`

export default Products
