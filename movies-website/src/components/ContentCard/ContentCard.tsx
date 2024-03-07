import { Card, Container, ContainerPosterCard, PosterCard, StyledCardMovieDescription, StyledCardMovieRating, StyledCardMovieTitle, TextContainer } from "./style"
import { useNavigate } from "react-router-dom";

export type ContentCardProps = {
    title: string,
    rating: number,
    relesease: string,
    thumbnail: string,
    handleClick: any;
}


function ContentCard({title, rating, relesease, thumbnail, handleClick}: ContentCardProps): JSX.Element {
    const navigate = useNavigate();

    function handleCardClick() {
        handleClick(title);
        navigate(`/movie/${title}`)
    }

    return(
        <>
                <Card onClick={() => handleCardClick()}>
                            <ContainerPosterCard>
                                <PosterCard src={thumbnail} alt={`Poster of ${title}`}></PosterCard>
                            </ContainerPosterCard>
                            <TextContainer>
                                <Container>
                                    <StyledCardMovieTitle>{title}</StyledCardMovieTitle>
                                </Container>
                                <Container>
                                    <StyledCardMovieDescription>{relesease}</StyledCardMovieDescription>
                                    <StyledCardMovieRating>{rating}</StyledCardMovieRating>
                                </Container>
                            </TextContainer>
                    </Card>
        </>
    )
}

export default ContentCard