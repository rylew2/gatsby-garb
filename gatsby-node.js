
const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

const PostTemplate = path.resolve("./src/templates/posts-template.js")

exports.createPages = async ({ actions, graphql }) => {

    const { createPage } = actions

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
    defer: true,
  })

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.edges
  posts.forEach(({ node: post }) => {
    createPage({
      path: `posts${post.fields.slug}`,
      component: PostTemplate,
      context: {
        slug: post.fields.slug,
      },
    })
  })
}

//for reach page we create - it has to have a unique path / slug

// onCreateNode - called by gatsby whenever new node is created or old one updated
// allows us to add slugs for our blog pages to the node objects we're getting form allMarkdownRemark query
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
