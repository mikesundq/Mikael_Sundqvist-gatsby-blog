import React from "react"
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons } from "../elements"
import { useStaticQuery, graphql } from "gatsby"


export const Footer = () => {
    
    
    const data = useStaticQuery(graphql`
        query {
            facebook: file(relativePath: { eq: "facebook.svg" }) {
                publicURL
            }
            instagram: file(relativePath: { eq: "instagram.svg"}){
                publicURL
            }
            linkedin: file(relativePath: { eq: "linkedin.svg" }) {
                publicURL
            }
            twitter: file(relativePath: { eq: "twitter.svg" }) {
                publicURL
            }
        }
    
    `
    )
    
    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                <a href="https://facebook.com">
                    <img src={data.facebook.publicURL} alt="Facebook logo"/>
                </a>
                <a href="https://linkedin.com">
                    <img src={data.linkedin.publicURL} alt="LinkedIn logo"/>
                </a>
                <a href="https://instagram.com">
                    <img src={data.instagram.publicURL} alt="Instagram logo"/>
                </a>
                <a href="https://twitter.com">
                    <img src={data.twitter.publicURL} alt="Twitter logo"/>
                </a>
                </FooterSocialIcons>
                <p>© 2020 Company. All right reserved.</p>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}