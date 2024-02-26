
import ContentCard, { ContentCardProps } from "../ContentCard/ContentCard";
import { ContentContainer, Section } from "./style";

type ContentDisplayProps = {
    movies: any
}

function ContentDisplay({movies}: ContentDisplayProps): JSX.Element {
    return (
        <Section>
            <ContentContainer>
                {movies.movies.map((movie: ContentCardProps)  => (
                    <ContentCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        rating={movie.rating}
                        releseaseDate={movie.releseaseDate}
                        posterSrc={movie.posterSrc} movies={undefined}                    />
                ))}
            </ContentContainer>
        </Section>
    );
}

export default ContentDisplay;


/*

import { useEffect, useState } from "react";
import ContentCard, { ContentCardProps } from "../ContentCard/ContentCard";
import { ContentContainer, Section } from "./style";

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = '13727d5610d9836d4eb708f0662a401f';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

function ContentDisplay(): JSX.Element {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}?language=en-US&page=1&api_key=${API_KEY}`);
                if (!response.ok) {
                    throw new Error('Error fetching response');
                }
                const data = await response.json();
                console.log(data)
                const moviesResult = data.results.map((movie: any) => ({
                    id: movie.id,
                    title: movie.original_title,
                    rating: Math.round(movie.vote_average * 100) / 100,
                    releseaseDate: movie.release_date,
                    posterSrc: `${IMAGE_BASE_URL}${movie.poster_path}`
                }));
                setMovies(moviesResult);
            } catch (error) {
                console.error('Error', error);
                
            }
        };

        fetchData();
    }, []);


    return (
        <Section>
            <ContentContainer>
                {movies.map((movie: ContentCardProps)  => (
                    <ContentCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        rating={movie.rating}
                        releseaseDate={movie.releseaseDate}
                        posterSrc={movie.posterSrc}
                    />
                ))}
            </ContentContainer>
        </Section>
    );
}

export default ContentDisplay;

*/