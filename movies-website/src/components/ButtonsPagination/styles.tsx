import styled from "styled-components";

export const StyledButton = styled.button`
    text-decoration: none;
    border: 1px solid orange;
    padding: .25rem 1rem;
    border-radius: .5rem;
    background-color: black;
    color: white;
    cursor: pointer;
    
    &:hover{
        background-color: orange;
    }

`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

`

export const PageText = styled.p`

`