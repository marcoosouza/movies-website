import { Card, Container, PosterCard, StyledCardMovieDescription, StyledCardMovieRating, StyledCardMovieTitle, TextContainer } from "./style"

export type ContentCardProps = {
    id: number,
    title: string,
    rating: number,
    releseaseDate: string,
    posterSrc: string,
    movies: any,
}

function ContentCard({id, title, rating, releseaseDate, posterSrc}: ContentCardProps): JSX.Element {
    return(
        <>
            <Card>
                <PosterCard src={posterSrc} alt={`Poster of ${title}`}></PosterCard>
                <TextContainer>
                    <Container>
                        <StyledCardMovieTitle>{title}</StyledCardMovieTitle>
                    </Container>
                    <Container>
                        <StyledCardMovieDescription>{releseaseDate.replaceAll("-", ".")}</StyledCardMovieDescription>
                        <StyledCardMovieRating>{rating}</StyledCardMovieRating>
                    </Container>
                </TextContainer>
            </Card>
        </>
    )
}

export default ContentCard