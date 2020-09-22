import React from "react"
import { NavWrapper, P, NavElement } from "../elements"
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
            <NavElement to="/">
                <img src={data.home.publicURL} alt="Home"/>
                <P>Home</P>
            </NavElement>
            <NavElement to="/about">
                <img src={data.about.publicURL} alt="About"/>
                <P>About</P>
            </NavElement>
            <NavElement to="/about">
                <img src={data.posts.publicURL} alt="Posts"/>
                <P>Posts</P>
            </NavElement>
        </NavWrapper>
    )
}
