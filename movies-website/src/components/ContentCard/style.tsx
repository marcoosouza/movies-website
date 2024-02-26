import styled from "styled-components";

export const Card = styled.div`
    max-width: 15rem;
    cursor: pointer;
    transition: transform 0.25s;
    
    &:hover{
        transform: scale(1.05, 1.05);
    }
`

export const PosterCard = styled.img`
    width: 100%;
    height: auto;
    border-radius: 0.5rem;

`

export const TextContainer = styled.div`
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.25rem;
`

export const StyledCardMovieTitle = styled.p`
    font-weight: bolder;
    margin-bottom: 0.25rem;
`

export const StyledCardMovieDescription = styled.p`
    color: gray;
    font-size:0.75rem;
`

export const StyledCardMovieRating = styled(StyledCardMovieDescription)`
    background-color: rgb(50,50,50);
    color: white;
    padding: 0 0.25rem;
    border-radius: 0.25rem;
    font-weight: bolder;
`