import styled from "styled-components"

export const CardWrapper = styled.div`
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.dark3};
    border-radius: 3px;
    min-width: 15rem;
    min-height: 20rem;
    justify-content: center;
    
`