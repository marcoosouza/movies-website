import ContentDisplay from "../components/ContentDisplay/ContentDisplay";
import Navbar from "../components/Navbar/Navbar";
import PageTitle from "../components/PageTitle/PageTitle";
import { ButtonsContainer, StyledButton } from "./styles";
import { useMovieFetcher } from "../hooks/useMovieFetcher";
import { useState } from "react";
import Filter from "../components/Filter/Filter";


function Movies(): JSX.Element {
    const {state, dispatch} = useMovieFetcher();
    const [genre, setGenre] = useState("");

    function handleGenreChange(selectedGenre: string) {
        setGenre(selectedGenre);
        dispatch({type:"genres", genre})
    }

    return (
        <>
            <Navbar />
            <PageTitle title="Movies" description="The people have spoken! See the most-watched movies now!" />
            <Filter onGenreChange={ handleGenreChange }></Filter>
            <ContentDisplay movies={state.movies} />
            <ButtonsContainer>
            <StyledButton onClick={() => dispatch({ type: "previous" })} disabled={state.page <= 1 ? true : false}>Previous</StyledButton>
            <StyledButton onClick={() => dispatch({ type: "next" })}>Next</StyledButton>
            </ButtonsContainer>
        </>
    );
}

export default Movies;