import React, {useState} from "react"
import { NavWrapper, NavLink, Ul, BikeMenu, UlDropDown } from "../elements"
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
    
    //using useState to make props
    const [ menu, showMenu ] = useState(false)
    

    return (
        <NavWrapper>
            <BikeMenu menu={menu} onClick={() => showMenu(!menu)}>
                <img src={data.logo.publicURL} alt="My Logo"/>
            </BikeMenu>
            <Ul menu={menu}>
                <li>
                <NavLink class="nav" to="/">
                    <img src={data.home.publicURL} alt="Home"/>
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink class="nav" to="/about">
                    <img src={data.about.publicURL} alt="About"/>
                    About
                </NavLink>
                </li>
                <li>
                <NavLink class="nav" to="#">
                    <img src={data.posts.publicURL} alt="Posts"/>
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
