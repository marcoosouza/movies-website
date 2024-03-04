import { useEffect, useState } from "react";
import ContentDisplay from "../components/ContentDisplay/ContentDisplay";
import Navbar from "../components/Navbar/Navbar"
import PageTitle from "../components/PageTitle/PageTitle"
import { useParams } from "react-router-dom"
import { getMoviesByKeyword } from "../API/API";


function Search() {
    const {query} = useParams();
    const[movies, setMovies] = useState();
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getMoviesByKeyword(query ? query : "");
                console.log(query ? query : "")
                console.log(data)
                setMovies(data)
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, [query]); 


    return (
        <>
            <Navbar></Navbar>
            <PageTitle title={query ? query : ""} description={`All result for the word ${query}`}></PageTitle>
            <ContentDisplay movies={movies}></ContentDisplay>
        </>
    )
}

export default Search