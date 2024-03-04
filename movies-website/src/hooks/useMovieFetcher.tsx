import { useEffect, useReducer } from "react";
import { getMovies, getMoviesByGenre } from "../API/API";

type State = {
    movies: any[],
    numMovies: number
    page: number,
    gender?: string,
    keyword?: string,
}

const initialState: State = {
    movies: [],
    numMovies: 20,
    page: 0,
}

type Action = { type: "next" } | { type: "previous" } | {type: "first load"} | {type: "genres", genre: string};

function reducer(state: State, action: Action) {
    let newPage: number;

    switch (action.type) {
        case "first load":
            newPage = 1
            return {...state, movies: getMovies(state.numMovies, newPage), page: newPage};

        case "next":
            newPage = state.page += 1;
            return {...state, movies: getMovies(state.numMovies, newPage), page: newPage};

        case "previous":
            newPage = state.page -= 1
            return {...state, movies: getMovies(state.numMovies, newPage), page: newPage};
        
        case "genres":
            return {...state, movies: getMoviesByGenre(action.genre)}
        default:
            return state;
    }
}

export function useMovieFetcher() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                dispatch({ type: "first load" }); 
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []); 

    return {state, dispatch};
}

