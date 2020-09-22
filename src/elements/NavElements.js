import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"


export const NavWrapper = styled.nav`
    grid-column: 2 / span 12;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    
    img {
        height: 4rem;
    }


    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`

export const NavElement = styled(props => <Link {...props}/>)`
    font-size: 4rem;
    line-height: 1.125rem;
    font-weight: 400;
    text-decoration: none;
    height: 4rem;
    margin: 2rem;
    padding: 1rem 0;
    //transition: font-size 0.3s ease;
    z-index: 10;

    img{
        height: 2rem;
    }
    
    
    // &:hover,
    // &:focus {
    //     font-size: 5rem;
    // }

`
export const Ul = styled.ul`

    margin-top: 6rem;
    list-style: none;
    position: relative;
    z-index: 10;

    li {
        float: left;
    }

    p {
        text-align: center;
    }

    ul {
        display: none;
        list-style: none;
        margin-top: 1rem;
    }

    li:hover ul,
    li:focus ul{
        display: block;
    }

    ul li{
        float: none;
    }


`
