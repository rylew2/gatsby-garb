import { graphql, Link, useStaticQuery } from "gatsby" //only point to internal pages , not external links
import React from "react"
import Layout from "../components/layout"

const getImagedata = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`
const ThirdPage = () => {
  const data = useStaticQuery(getImagedata)
  console.log("3rd page => ", data)
  return (
    <Layout>
      <h1>Hello from page 3!</h1>

      <h3>Image File Data</h3>
      <table>
        <thead>
          <tr>Relative Path</tr>
          <tr>Size of Image</tr>
          <tr>Size of Image</tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, idx) => (
            <tr key={idx}>
              <td>{node.relativePath}</td>
              <td>{node.size}</td>
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/page-2">Go to page 2</Link>
    </Layout>
  )
}

export default ThirdPage
