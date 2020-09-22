import React from "react"
import { NavWrapper, P, NavElement, Ul } from "../elements"
import { useStaticQuery, graphql } from "gatsby"

export const Nav = () => {

    const data = useStaticQuery(graphql`
        
        query{
            logo: file(relativePath: { eq: "logo.svg" }) {
                publicURL
            }
            about: file(relativePath: { eq: "about-icon.svg" }) {
                publicURL
            }
            home: file(relativePath: { eq: "home-icon.svg" }) {
                publicURL
            }
            posts: file(relativePath: { eq: "posts-icon.svg" }) {
                publicURL
            }
            allMdx(sort: {order: DESC, fields: frontmatter___date}) {
                    edges {
                    node {
                        frontmatter {
                        slug
                        }
                    }
                    }
                }
        }

    `)

    const posts = data.allMdx.edges

    return (
        <NavWrapper>
            <img src={data.logo.publicURL} alt="My Logo"/>
            <Ul>
                <li>
                <NavElement to="/">
                    <img src={data.home.publicURL} alt="Home"/>
                    Home
                    {/* <P>Home</P> */}
                </NavElement>
                </li>
                <li>
                <NavElement to="/about">
                    <img src={data.about.publicURL} alt="About"/>
                    About
                    {/* <P>About</P> */}
                </NavElement>
                </li>
                <li>
                <NavElement to="#">
                    <img src={data.posts.publicURL} alt="Posts"/>
                    Posts
                    {/* <P>Posts</P> */}
                </NavElement>
                    <ul>
                    {posts.map(post => (
                    <li>
                        <NavElement to={"/" + post.node.frontmatter.slug}>
                            {post.node.frontmatter.slug}
                        </NavElement>
                    </li>
                    ))}
                    </ul>
                </li>
            </Ul>
        </NavWrapper>
    )
}

// export const pageQuery = graphql`

//     query AllPostsQuery($skip : Int!, $limit: Int!) {
//         allMdx(sort: {order: DESC, fields: frontmatter___date}) {
//             edges {
//               node {
//                 frontmatter {
//                   slug
//                 }
//               }
//             }
//           }
//     }
// `

