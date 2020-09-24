import React, {useState} from "react"
import { NavWrapper, NavLink, Ul, BikeMenu, UlDropDown } from "../elements"
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
    
    
    //added max height/width to try and get rid of browser bug.. doesnt work!
    return (
        <NavWrapper>
            <BikeMenu menu={menu} onClick={() => showMenu(!menu)}>
                <img src={data.logo.publicURL} max-height="100%" max-width="auto" alt="My Logo"/>
            </BikeMenu>
            <Ul menu={menu}>
                <li>
                <NavLink class="nav" to="/">
                    <img src={data.home.publicURL} max-height="100%" max-width="auto" alt="Home"/>
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink class="nav" to="/about">
                    <img src={data.about.publicURL} max-height="100%" max-width="auto" alt="About"/>
                    About
                </NavLink>
                </li>
                <li>
                <NavLink class="nav" to="#">
                    <img src={data.posts.publicURL} max-height="100%" max-width="auto" alt="Posts"/>
                    Posts
                </NavLink>
                    <UlDropDown>
                    {posts.map(post => (
                    <li>
                        <NavLink to={"/" + post.node.frontmatter.slug}>
                            {post.node.frontmatter.slug}
                        </NavLink>
                    </li>
                    ))}
                    </UlDropDown>
                </li>
            </Ul>
        </NavWrapper>
    )
}
