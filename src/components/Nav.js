import React, {useState} from "react"
import { NavWrapper, NavLink, Ul, BikeMenu, UlDropDown, NavLinkBugFix } from "../elements"
import { useStaticQuery, graphql } from "gatsby"

export const Nav = () => {






    const data = useStaticQuery(graphql`
        
        query{
            logo: file(relativePath: { eq: "logo.svg" }) {
                publicURL
            }
            about: file(relativePath: { eq: "engine.svg" }) {
                publicURL
            }
            home: file(relativePath: { eq: "garage.svg" }) {
                publicURL
            }
            posts: file(relativePath: { eq: "road.svg" }) {
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
    
    //using useState to make props
    const [ menu, showMenu ] = useState(false)
    
    
    
    return (
        <NavWrapper>
            <BikeMenu menu={menu} onClick={() => showMenu(!menu)}>
                <img src={data.logo.publicURL} max-height="100%" max-width="auto" alt="My Logo"/>
            </BikeMenu>
            <Ul menu={menu}>
                <li>
                <NavLinkBugFix class="nav" to="/">
                    <img src={data.home.publicURL} max-height="100%" max-width="auto" alt="Home"/>
                    Home
                </NavLinkBugFix>
                </li>
                <li>
                <NavLinkBugFix class="nav" to="/about">
                    <img src={data.about.publicURL} max-height="100%" max-width="auto" alt="About"/>
                    About
                </NavLinkBugFix>
                </li>
                <li>
                <NavLinkBugFix class="nav" to="#">
                    <img src={data.posts.publicURL} max-height="100%" max-width="auto" alt="Posts"/>
                    Posts
                </NavLinkBugFix>
                    <UlDropDown>
                    {posts.map(post => (
                    <li>
                        <NavLinkBugFix to={"/" + post.node.frontmatter.slug}>
                            {post.node.frontmatter.slug}
                        </NavLinkBugFix>
                    </li>
                    ))}
                    </UlDropDown>
                </li>
            </Ul>
        </NavWrapper>
    )
}
