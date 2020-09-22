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
        }

    `)

    return (
        <NavWrapper>
            <img src={data.logo.publicURL} alt="My Logo"/>
            <Ul>
                <li>
                <NavElement to="/">
                    <img src={data.home.publicURL} alt="Home"/>
                    <P>Home</P>
                </NavElement>
                </li>
                <li>
                <NavElement to="/about">
                    <img src={data.about.publicURL} alt="About"/>
                    <P>About</P>
                </NavElement>
                </li>
                <li>
                <NavElement to="#">
                    <img src={data.posts.publicURL} alt="Posts"/>
                    <P>Posts</P>
                </NavElement>
                    <ul>
                        <li>post1</li>
                        <li>post2</li>
                        <li>post3</li>
                        <li>post4</li>
                    </ul>
                </li>
            </Ul>
        </NavWrapper>
    )
}
