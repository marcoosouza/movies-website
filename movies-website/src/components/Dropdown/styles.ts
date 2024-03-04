import styled from "styled-components";

type DropdownProps = {
    ishover: boolean,
}

export const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-top: 1rem;
    position: relative;
    label{
        margin-bottom: 1rem;
        font-Weight
    }
`

export const DropdownBox = styled.div`
    padding: 0 1rem;
    border: 1px solid gray;
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.5rem;
`

export const OptionsContainer = styled.div<DropdownProps>`
    display: ${({ishover}) => ishover ? "block": "none"};    
    background-color: white;
    position: absolute;
    top: 1.25rem;
    right: 0;
    width: 25%;
    z-index: 1;

    p{
        color: black;
        text-align: center;
        border-bottom: 1px solid gray;
        font-weight: bolder;
        cursor: pointer;
    }

    p:hover{
        background-color: gray;
    }
`

export const Options = styled.p`
    
`