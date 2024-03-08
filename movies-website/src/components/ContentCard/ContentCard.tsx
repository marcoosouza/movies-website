import { useDispatch } from "react-redux";
import { Card, Container, ContainerPosterCard, PosterCard, StyledCardMovieDescription, StyledCardMovieRating, StyledCardMovieTitle, TextContainer } from "./style"
import { useNavigate } from "react-router-dom";
import { increment } from "../../state/views/viewsSlice";

export type ContentCardProps = {
    title: string,
    rating: number,
    relesease: string,
    thumbnail: string,
}


function ContentCard({title, rating, relesease, thumbnail}: ContentCardProps): JSX.Element {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleCardClick() {
        dispatch(increment(title))
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