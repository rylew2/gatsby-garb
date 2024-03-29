import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const PostTemplate = ({ data: post }) => (
  <Layout>
    <div>
      <h1>{post.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  </Layout>
)

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`

export default PostTemplate
