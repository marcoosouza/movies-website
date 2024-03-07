import { useEffect, useState } from "react";
import { MovieType, getMoviesByKeyword } from "../API/API";

export function useSearch(keyword: string) {
    const [movies, setMovies] = useState<MovieType[]>([])

    useEffect(() => {
        const data = getMoviesByKeyword(keyword);
        setMovies(data)
    }, [keyword])

    return movies;
}