import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Action = {
    type: "INCREMENT",
    payload: string,
}

type MovieViews = {
    title: string,
    views: number,
}

type State = {
    movies: MovieViews[],
}

const initialState: State = {
    movies: []
}

const viewsSlice = createSlice({
    name: "views",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<string>) => {
            let index = state.movies.findIndex((movie) => movie.title === action.payload);
            let newMoviesViews = []

            if(index !== -1) {
                newMoviesViews = [...state.movies];
                newMoviesViews[index] = {...newMoviesViews[index], views: newMoviesViews[index].views + 1}
                console.log(newMoviesViews)
                state.movies = newMoviesViews 
            
            } else { 

            newMoviesViews = [...state.movies];
            newMoviesViews.push({title: action.payload, views: 1});
            state.movies = newMoviesViews;
            }
        }
    }
})

export const { increment } = viewsSlice.actions;
export default viewsSlice.reducer;



