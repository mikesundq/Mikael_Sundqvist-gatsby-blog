import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"


export const NavWrapper = styled.nav`
    grid-column: 2 / span 12;
    grid-row: 1 / 3;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    z-index: 20;
    
    

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;

    }

    @media ${props => props.theme.breakpoints.mobile}{
        grid-column: 2 / span 12;
        grid-row: 1 / 2;

        div{
            display: none;
        }

        justify-content: flex-start;


        ul div:hover,
        ul div:focus {

            display: block;


            /* img{
                height: 6rem;
                
            } */
            
        }


        /* .logo:hover,
        .logo:focus {
            display: none;
        }

        .logo:onclick{
            display: none;
        } */



    }
`

export const NavElement = styled(props => <Link {...props}/>)`
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-weight: 400;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.dark1};
    height: 5rem;
    margin: 1rem;
    padding: 1rem 2rem;
    //transition: font-size 0.3s ease;
    z-index: 20;

    img {
        height: 49px;
    }
    
    &:hover,
    &:focus {
        background-color: grey;
    }

`

export const BikeMenu = styled.div`
    img {
        height: 81px;
    }

`



export const Ul = styled.ul`

    list-style: none;
    position: relative;
    z-index: 20;
    display: inline-block;

    li {
        float: left;
    }

    p {
        text-align: center;
    }

    ul {
        list-style: none;
        max-width: 97px;
        
    }

    li ul a {
        margin: 0;
        background-color: grey;
        align-content: center;
        justify-content: center;
        padding: 1rem 1rem;
    }

    li ul a:hover,
    li ul a:focus{
        background-color: red;
    }

    li ul {
        max-height: 0;
        transition: max-height 0.15s ease-out;
        overflow: hidden;
        position: absolute;
        min-width: 14rem;
    }

    li:hover ul,
    li:focus ul{
        max-height: 50rem;
        transition: max-height 0.45s ease-in;
    }

    ul li{
        float: none;
        margin: 0rem;
    }
    
`
