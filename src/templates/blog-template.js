import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const BlogPage = ({ data, pageContext }) => {
  //   const data = useStaticQuery(getMarkdownData)
  const { currentPage, isFirstPage, isLastPage } = pageContext
  const nextPage = `/blog/${String(currentPage + 1)}`
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${String(currentPage - 1)}`

  console.log("blog- template => ", data, pageContext)
  return (
    <Layout>
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              <Link to={`/posts${node.fields.slug}`}>
                {node.frontmatter.title}
              </Link>
              <span style={{ color: "#bbb" }}> {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}

        {/* Pagination Links */}
        <div>
          {!isFirstPage && (
            <Link to={prevPage} rel="prev">
              Prev Page
            </Link>
          )}{" "}
          {!isLastPage && (
            <Link to={nextPage} rel="next">
              Next Page
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

//originally had static query - moved to page query to pass variable
export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt # preview content
          frontmatter {
            title
            # date(formatString: "ddd, MMM Do YYYY", locale: "us")
            date(fromNow: true)
          }
          html
        }
      }
    }
  }
`

export default BlogPage
