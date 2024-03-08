import { ContainerPosterCard, Description, DescriptionContainer, PosterCard, TextContainer, Title } from "./style";
import { MovieType } from "../../API/API";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";


function MovieDescription({title, cast, genres, extract, thumbnail, rating, release}: MovieType): JSX.Element {
    const movieViews = useSelector((state: RootState) => state.views.movies)
    const index = movieViews.findIndex((movie) => movie.title === title)

    return (
        <>
        <DescriptionContainer>
        <ContainerPosterCard>
                <PosterCard src={thumbnail} alt={`Poster of ${title}`}></PosterCard>
        </ContainerPosterCard>
            <TextContainer>
                <Title>{title}</Title>
                <Description color="gray">{release} . 1h 34min {rating}/10</Description>
                <Description color="white">{genres.join(", ")}</Description>
                <Description color="white">{extract}</Description>
                <Description color="white"><span>Starring</span> {cast.join(", ")}</Description>
                <Description color="white"><span>Directed by</span> {cast[0]}</Description>
                <Description color="white"><span>Views</span> {movieViews[index].views}</Description>
            </TextContainer>
        </DescriptionContainer>
        </>
    )
}

export default MovieDescription;

