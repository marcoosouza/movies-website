import * as movies from './movies-2020s.json';
import { getRandomInt } from './utils/randomInt';


export function getMovies(numberPerPage: number, page: number) {
    const minIndex = numberPerPage * (page - 1);
    const maxIndex = numberPerPage * page;

    console.log(minIndex, maxIndex)
    const pageMovies = movies.default.slice(minIndex, maxIndex)

    const result = pageMovies.map((movie: any, index: number) => {       
        return {
                id: index,
                title: movie.title,
                rating: getRandomInt(5, 10),
                releseaseDate: `${getRandomInt(1,31)}.${getRandomInt(1,12)}.${movie.year}`,
                posterSrc: movie.thumbnail,
        }
    })

    return result
}

export function getMoviesByKeyword(keyword: string) {
    const filteredMovies = movies.default.filter((movie: any) => movie.title.includes(keyword))

    if(!filteredMovies) {
        return
    }

    const result = filteredMovies.map((movie: any, index: number) => {       
        return {
                id: index,
                title: movie.title,
                rating: getRandomInt(5, 10),
                releseaseDate: `${getRandomInt(1,31)}.${getRandomInt(1,12)}.${movie.year}`,
                posterSrc: movie.thumbnail,
        }
    })

    return result
}


export function getMoviesByGenre(genre: string) {
    if(genre === "All"){
        return getMovies(20, 1)
    }

    const filteredMovies = movies.default.filter((movie: any) => movie.genres.includes(genre))
    console.log(genre)

    if(!filteredMovies) {
        return
    }

    const result = filteredMovies.map((movie: any, index: number) => {       
        return {
                id: index,
                title: movie.title,
                rating: getRandomInt(5, 10),
                releseaseDate: `${getRandomInt(1,31)}.${getRandomInt(1,12)}.${movie.year}`,
                posterSrc: movie.thumbnail,
        }
    })

    return result
}


