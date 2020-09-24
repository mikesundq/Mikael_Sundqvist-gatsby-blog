import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"

export const NavWrapper = styled.nav`
    
    grid-column: 2 / span 12;
    grid-row: 1 / 3;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    z-index: 20;
    
    

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;

    }

    @media ${props => props.theme.breakpoints.mobile}{
        grid-column: 2 / span 12;
        grid-row: 1 / 2;

        justify-content: flex-start;

    }
`

export const NavLink = styled(props => <Link {...props}/>)`
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-weight: 400;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.dark1};
    margin: 1rem;
    padding: 1rem 2rem;
    transition: background-color 0.3s ease;
    z-index: 20;

    // img {
    //     height: 39px;
    // }
    
    &:hover,
    &:focus {
        background-color: ${props => props.theme.colors.dark3};
    }

`

export const BikeMenu = styled.div`
    
    align-items: center;
    

    display: none;
    img {
        height: 81px;
        transition: transform 0.25s;
        transform: ${({menu}) => menu ? "rotate(-45deg)" : "rotate(0)"};
    }

    cursor: pointer;

    @media ${props => props.theme.breakpoints.mobile}{
        display: block;
        width: 100%;
    }

`
// dropdown for posts
export const UlDropDown = styled.ul`


    /* max-height transition makes the menu ease out - 
    connected to li in Ul... */
    max-height: 0;
    transition: max-height 0.15s ease-out;
    
    overflow: hidden;
    position: absolute;
    list-style: none;

    /* breakpoint 50rem 800px */
    @media ${props => props.theme.breakpoints.mobile}{
    }

    a {
        margin: 0;
        background-color: ${props => props.theme.colors.dark1};
        color: ${props => props.theme.colors.light2};
        align-content: center;
        justify-content: center;
        padding: 1rem 1rem;
    }

    a:hover,
    a:focus {
        background-color: ${props => props.theme.colors.dark2};
    }

    li {
        float: none;
        margin: 0rem;
        min-width: 14rem;
    }

`

export const Ul = styled.ul`

    list-style: none;
    position: relative;
    z-index: 20;
    background-color: ${props => props.theme.colors.light2};
    

    li {
        float: left;
    }

    p {
        text-align: center;
    }
    
    @media ${props => props.theme.breakpoints.mobile}{
        /* making use of prop menu from nav.js in components */
        display: ${({menu}) => menu ? "block" : "none"};
        /* making use of prop menu from nav.js in components */
    }

    /* max-height transition is connected to UlDropDown -
    makes the menu ease-in */
    li:hover ul,
    li:focus ul{
        max-height: 50rem;
        transition: max-height 0.45s ease-in;
    }
`
