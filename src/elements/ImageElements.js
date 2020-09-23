import styled from "styled-components"

export const FeatureImageWrapper = styled.div`

    grid-column: 3 / span 10;
    grid-row: 2 / 5;
    overflow: hidden;
    position: relative;

    @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile}{
        grid-row: 3 / 5;
        grid-column: 2 / span 6;
    }

`