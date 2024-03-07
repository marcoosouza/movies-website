import ContentDisplay from "../components/ContentDisplay/ContentDisplay";
import Navbar from "../components/Navbar/Navbar";
import PageTitle from "../components/PageTitle/PageTitle";
import { useParams } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";

function Search() {
    const { keyword } = useParams();
    const movies = useSearch(keyword || "");

    return (
        <>
            <Navbar />
            <PageTitle title={keyword || ""} description={`All results for the word ${keyword || ""}`} />   
            <ContentDisplay movies={movies} />
        </>
    );
}

export default Search;