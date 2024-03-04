import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    color: black;
    border-radius: 1rem;
    width: 6rem;
    border: none;
    cursor: pointer;
    font-weight: bolder;
    background-color: orange;

    &:hover{
        background-color: gold;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin:5rem 0;
`