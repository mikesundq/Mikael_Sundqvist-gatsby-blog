import styled from "styled-components"

export const ContainerWrapper = styled.div`

    display: grid;
    height: 100%;
    grid-template-columns: 1fr repeat(12, minmax(auto, 5.2rem)) 1fr;
    grid-template-rows: 5rem 20rem 5rem auto;
    gap: 0 2rem;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-columns: 2rem repeat()(6, 1fr) 2rem;
        grid-gap: 0 1rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1rem repeat()(6, 1fr) 1rem;
    }

`