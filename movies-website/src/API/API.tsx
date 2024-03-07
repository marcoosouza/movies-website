import * as movies from './movies-2020s.json';
import { getRandomInt } from './utils/randomInt';

export type MovieAPI = {
    title: string,
    year: number,
    cast: string[],
    genres: string[],
    href: string,
    extract: string,
    thumbnail: string,
    thumbnail_width: number,
    thumbnail_height: number,
}

export type MovieType = {
    title: string,
    cast: string[],
    genres: string[],
    extract: string,
    thumbnail: string,
    rating: number,
    release: string,
  
}


export function getMoviesByKeyword(keyword: string): MovieType[] {
    const filteredMovies = movies.default.filter((movie: MovieAPI) => movie.title.includes(keyword))

    if(!filteredMovies) {
        return []
    }

    const result = filteredMovies.map((movie: MovieAPI, index: number) => {       
        return {
            title: movie.title,
            cast: movie.cast,
            genres: movie.genres,
            extract: movie.extract,
            thumbnail: movie.thumbnail,
            rating: getRandomInt(5, 10),
            release: `${getRandomInt(1,31)}.${getRandomInt(1,12)}.${movie.year}`,
    }
    })

    return result
}


export function getMoviesByGender(genre: string): MovieType[] {
    let filteredMovies: MovieAPI[]  = [];

    if(genre === "All"){
        filteredMovies = movies.default;
    }
    else{
        filteredMovies = movies.default.filter((movie: MovieAPI) => movie.genres.includes(genre))
    }

    if(!filteredMovies) {
        return []
    }

    const result = filteredMovies.map((movie: MovieAPI) => {       
        return {
            title: movie.title,
            cast: movie.cast,
            genres: movie.genres,
            extract: movie.extract,
            thumbnail: movie.thumbnail,
            rating: getRandomInt(5, 10),
            release: `${getRandomInt(1,31)}.${getRandomInt(1,12)}.${movie.year}`,
    }
    })

    return result
}

export function getMoviesByName(name: string): MovieType[] {
    const filteredMovies = movies.default.filter((movie: MovieAPI) => movie.title === name)

    if(!filteredMovies) {
        return []
    }

    const result = filteredMovies.map((movie: MovieAPI) => {       
        return {
            title: movie.title,
            cast: movie.cast,
            genres: movie.genres,
            extract: movie.extract,
            thumbnail: movie.thumbnail,
            rating: getRandomInt(5, 10),
            release: `${getRandomInt(1,31)}.${getRandomInt(1,12)}.${movie.year}`,
    }
    })

    return result
}


