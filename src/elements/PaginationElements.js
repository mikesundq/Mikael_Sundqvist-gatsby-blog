import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const PaginationWrapper = styled.div`

    grid-column: 3 / span 10;
    grid-row: 5;
    padding: 3rem 0;
    display: flex;
    justify-content: space-between;

    a:nth-child(1) {
        color: ${props => props.isFirst ? props.theme.colors.dark3 : props.theme.colors.dark1};
        pointer-events: ${props => (props.isFirst ? "none" : "auto")};
        cursor: ${props => (props.isFirst ? "default" : "pointer")};
    }

    a:nth-child(2) {
        color: ${props => props.isLast ? props.theme.colors.dark3 : props.theme.colors.dark1};
        pointer-events: ${props => (props.isLast ? "none" : "auto")};
        cursor: ${props => (props.isLast ? "default" : "pointer")};
    }

    @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
    justify-content: center;
    grid-row: auto;
    z-index: 15;
    }
`

export const PaginationElement = styled(props => <Link {...props}/>)`
    font-size: 4rem;
    line-height: 1.125rem;
    font-weight: 400;
    text-decoration: none;
    height: 4rem;
    margin: 2rem;
    padding: 1rem 0;
    transition: font-size 0.3s ease;

    
    
    &:hover,
    &:focus {
        font-size: 5rem;
        //text-decoration: underline;
    }

`