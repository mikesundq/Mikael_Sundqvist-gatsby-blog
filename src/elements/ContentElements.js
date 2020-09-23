import styled from "styled-components"

export const ContentWrapper = styled.main`
    grid-column: 4 / span 8;
    grid-row: 4 / span 5;
    background-color: ${props => props.theme.colors.light2};
    padding: ${props => `${props.theme.spacings.large} ${props.theme.spacings.medium}`};
    box-shadow: ${props => props.theme.shadows.shadow1};
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* must be a better way but this will do for now */
    h1:first-child{
        width: 100%;
        text-align: center;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-row: 5 / span 5;
        grid-column: 2 / span 6;
        padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
    }


`