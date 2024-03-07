import { useState } from "react";
import { MovieType } from "../../API/API";
import ContentCard from "../ContentCard/ContentCard";
import { ContentContainer, Section } from "./style";


type MoviesClickState = {
    movies: {title: string, views: number}[]
}

const initialState: MoviesClickState = {
    movies: []
}

type ContentDisplayProps = {
    movies: MovieType[];
};

function ContentDisplay({ movies }: ContentDisplayProps): JSX.Element {
    const[viewsMovies, setViewsMovies] = useState<MoviesClickState>(initialState);

    function handleClick(title: string, ) {
        const tmp = {...viewsMovies}
        let index = tmp.movies.findIndex((movie) => movie.title === title)

        if(index !== -1) {
            tmp.movies[index] = {...tmp.movies[index], views: tmp.movies[index].views + 1}

        } else {
            tmp.movies.push({title, views: 1});
        }

        setViewsMovies(tmp);
    }

    return (
        <Section>
            <ContentContainer>
                {movies ? movies.map((movie: MovieType) => (
                    <ContentCard
                            key={movie.title}
                            title={movie.title}
                            rating={movie.rating}
                            relesease={movie.release}
                            thumbnail={movie.thumbnail}
                            handleClick={handleClick}            
                        />)
                    ) : ""}
            </ContentContainer>
        </Section>
    );
}

export default ContentDisplay;