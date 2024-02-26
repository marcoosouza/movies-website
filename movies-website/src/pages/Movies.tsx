import { useEffect, useState } from "react";
import { fetchData } from "../API/API";
import ContentDisplay from "../components/ContentDisplay/ContentDisplay";
import Navbar from "../components/Navbar/Navbar";
import PageTitle from "../components/PageTitle/PageTitle";

function Movies(): JSX.Element {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchData()
            .then(movieData => {
                setMovies(movieData); 

            })
            .catch(error => console.error('Error', error));
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <PageTitle title={"Movies"} description={"The people have spoken! See the most-watched movies now!"}></PageTitle>
            <ContentDisplay movies={{movies}}></ContentDisplay>
        </>
    )
}

export default Movies;
