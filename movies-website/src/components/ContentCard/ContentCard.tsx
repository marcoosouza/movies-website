import { Card, Container, ContainerPosterCard, PosterCard, StyledCardMovieDescription, StyledCardMovieRating, StyledCardMovieTitle, TextContainer } from "./style"

export type ContentCardProps = {
    id: number,
    title: string,
    rating: number,
    releseaseDate: string,
    posterSrc: string,
    movies: any,
}

function ContentCard({title, rating, releseaseDate, posterSrc}: ContentCardProps): JSX.Element {
    
    return(
        <>
            <Card>
                    <ContainerPosterCard>
                        <PosterCard src={posterSrc} alt={`Poster of ${title}`}></PosterCard>
                    </ContainerPosterCard>
                    <TextContainer>
                        <Container>
                            <StyledCardMovieTitle>{title}</StyledCardMovieTitle>
                        </Container>
                        <Container>
                            <StyledCardMovieDescription>{releseaseDate}</StyledCardMovieDescription>
                            <StyledCardMovieRating>{rating}</StyledCardMovieRating>
                        </Container>
                    </TextContainer>
            </Card>
        </>
    )
}

export default ContentCard