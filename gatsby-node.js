const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

const PostTemplate = path.resolve("./src/templates/posts-template.js")
const BlogTemplate = path.resolve("./src/templates/blog-template.js")

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
      allMarkdownRemark(limit: 1000) {
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
  console.log("result => ", result)
  posts.forEach(({ node: post }) => {
    createPage({
      path: `posts${post.fields.slug}`,
      component: PostTemplate,
      context: {
        slug: post.fields.slug,
      },
    })
  })

  posts.forEach((_, index, postsArr) =>{
      const totalPages = postsArr.length
      const postsPerPage = 1
      const currentPage = index + 1
      const isFirstPage = index === 0
      const isLastPage = currentPage === totalPages

      createPage({
          path: isFirstPage? '/blog' : `/blog/${currentPage}`,
          component: BlogTemplate,
          context: {
              limit: postsPerPage,
              skip: index * postsPerPage,
              isFirstPage,
              isLastPage,
              currentPage,
              totalPages
          }
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
