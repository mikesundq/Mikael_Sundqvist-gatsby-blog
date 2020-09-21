import styled from "styled-components"

export const ContentWrapper = styled.main`
    grid-column: 4 / span 8;
    grid-row: 3 / span 5;
    background-color: ${props => props.theme.colors.light2};
    padding: ${props => `${props.theme.spacings.large} ${props.theme.spacings.medium}`};
    box-shadow: ${props => props.theme.shadows.shadow1};
    z-index: 7;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
    }


`