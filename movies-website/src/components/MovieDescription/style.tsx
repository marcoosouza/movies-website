import styled from "styled-components";

type DescriptionProps = {
    color: string,
}

export const DescriptionContainer = styled.div`
    display: flex;
    margin-top: 5rem;
`

export const Title = styled.h2`
    font-size: 3rem;
    font-weight: bolder;
    margin-left: 1rem;
`

export const TextContainer = styled.div`
    margin-left: 1rem;
`

export const Description = styled.p<DescriptionProps>`
    color: ${({color}) => color};
    margin: 1rem 0 0 1rem;

    span{
        color: gray;
        font-weight: bolder;
    }
`

export const ContainerPosterCard = styled.div`
    width: fit-content;
    height: fit-content;
    border-radius: 0.5rem;
`

export const PosterCard = styled.img`
    width: 250px;
    height: 350px;
    transition: transform 0.5s;

    &:hover{
        transform: scale(1.15, 1.15);
    }
`