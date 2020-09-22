import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"


export const NavWrapper = styled.nav`
    grid-column: 2 / span 12;
    grid-row: 1 / 3;
    display: flex;
    align-items: center;
    background-color: lightseagreen;
    
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

   
    list-style: none;
    position: relative;
    z-index: 10;
    background-color: grey;
    padding-top: 1.7rem;
   

    li {
        float: left;
    }

    p {
        text-align: center;
    }

    ul {
        display: none;
        list-style: none;
        
    }

    li:hover ul,
    li:focus ul{
        display: block;
        position: absolute;
        background-color: lime;
        /* max-height: 50rem;
        transition: max-height 0.45s ease-in; */
        
    }

    ul li{
        float: none;
        margin: 1rem;
        /* max-height: 0;
        transition: max-height 0.35s ease-out; */
    }


`
