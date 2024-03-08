import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { MovieType, getMoviesByName } from "../API/API";
import MovieDescription from "../components/MovieDescription/MovieDescription";

function MovieInfo(): JSX.Element {
    const { name } = useParams(); 
    const [movie, setMovie] = useState<MovieType>();


    useEffect(() => {
        const data = getMoviesByName(name || "");
        const movieData = data[0];

        setMovie(movieData);
    }, [name]) 

    return (
        <>
            <Navbar></Navbar>
            {movie && (
                <MovieDescription
                    title={movie.title}
                    release={movie.release}
                    cast={movie.cast}
                    genres={movie.genres}
                    extract={movie.extract}
                    thumbnail={movie.thumbnail} 
                    rating={movie.rating}                />
            )}
        </>
    )
}

export default MovieInfo;