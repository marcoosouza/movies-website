import { MovieType } from "../API";

export function pagination(movies: MovieType[], page: number, moviesPerPage: number): [MovieType[], number] {
    const maxIndex = moviesPerPage * page;
    const minIndex = maxIndex - moviesPerPage;
    
    const maxPage = Math.ceil(movies.length / moviesPerPage);

    return [movies.slice(minIndex, maxIndex), maxPage];
}