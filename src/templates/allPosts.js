import React from "react"
import { graphql } from "gatsby"
import {
    Container,
    Content,
    ContentCard,
    FeatureImage,
    Pagination,
    Seo
} from "../components"
import { H1 } from "../elements"

const allPosts = ({pageContext, data}) => {
    const {currentPage, numPages} = pageContext
    const isFirst = currentPage === 1
    const isLast =  currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
    const nextPage = `/${currentPage + 1}`

    const posts = data.allMdx.edges

    return(
        <Container>
          <Seo/>
            <FeatureImage/>
            <Content>
                {/* i've allready set this h1 to width 100% */}
                <H1 margin="0 0 1rem 0">
                My Glorious Blog
                </H1>
                {posts.map(post => (
                    <ContentCard
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        slug={post.node.frontmatter.slug}
                        />
                ))}
            </Content>
            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
    </Container>
    )

}

export const pageQuery = graphql`

    query AllPostsQuery($skip : Int!, $limit: Int!) {
        allMdx(
            sort: { fields: frontmatter___date, order: DESC }
            skip: $skip
            limit: $limit
          ) {
            edges {
              node {
                frontmatter {
                  slug
                  title
                  date(formatString: "MMMM DD, YYYY")
                  excerpt
                }
              }
            }
          }
    }
`
export default allPosts