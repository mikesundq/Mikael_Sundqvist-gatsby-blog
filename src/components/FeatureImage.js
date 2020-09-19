import React from "react"
import { FeatureImageWrapper } from "../elements"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export const FeatureImage = ({ fixed }) => {

    const data = useStaticQuery(graphql`
    
    query {
        imageSharp(fixed: {originalName: {eq: "ktm-desert.jpg"}}) {
            fixed {
                ...GatsbyImageSharpFixed
            }
        }
    }

    `)

    return (

        <FeatureImageWrapper>
        <Img
            fixed={fixed ? fixed : data.imageSharp.fixed}
            style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                
            }}
        />
        </FeatureImageWrapper>

    )

}
