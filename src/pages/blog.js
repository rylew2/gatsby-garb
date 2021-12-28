import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const getMarkdownData = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`

const BlogPage = () => {
  const data = useStaticQuery(getMarkdownData)

  console.log("blog => ", data)
  return (
    <Layout>
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <h3>
                {node.frontmatter.title}
                <span style={{ color: "#bbb" }}> {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
export default BlogPage
