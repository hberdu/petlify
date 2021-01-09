const { createFilePath } = required(`gatsby-source-filesystem`)

// adiciona o campo slug para cada um dos posts
exports.onCreateNode = ({node, getNode, actions}) => {
    const { createNodeField } = actions
// verifica se o node é markdown    
    if (node.internal.type === "MarkdownRemark")    {
        const relativeFilePath = createFilePath({
            node,
            getNode,
            basepath: "data/faqs/",
        })

        createNodeField({
            node,
            name: "slug",
            value: `/${slug.slice(12)}`,
        })
    }
}