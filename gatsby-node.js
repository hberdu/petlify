const {createFilePath} = require(`gatsby-source-filesystem`)
const path = require('path')

// adiciona o campo slug para cada um dos posts
exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions
    // verifica se o node é markdown
    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({node, getNode, basepath: "pages/"})

        createNodeField({
                node, name: "slug", value: `/${
                slug.slice(12)
            }`
        })
    }
}

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    return graphql(`
    query MyQuery {
        allMarkdownRemark(sort: {fields: frontmatter___date, order:DESC}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                background
                category
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                title
              }
              timeToRead
            }
          }
        }
      }  
    `).then(result => {

        const posts = result.data.allMarkdownRemark.edges

        posts.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {

                    slug: node.fields.slug
                }
            })
        })

        const postsPerPage = 6
        const numPages = Math.ceil(posts.length / postsPerPage)

        Array.from({length: numPages}).forEach((_, index) => {
            createPage({
                path: index === 0 ? `/` : `/page/${
                    index + 1
                }`,
                component: path.resolve(`./src/templates/blog-list.js`),
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    numPages,
                    currentPage: index + 1
                }
            })
        })
    })
}
