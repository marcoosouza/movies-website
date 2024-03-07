import { useParams } from "react-router-dom";
import ButtonsPagination from "../components/ButtonsPagination/ButtonsPagination";
import ContentDisplay from "../components/ContentDisplay/ContentDisplay";
import Navbar from "../components/Navbar/Navbar";
import PageTitle from "../components/PageTitle/PageTitle";
import { pagination } from "../API/utils/pagination";
import Filter from "../components/Filter/Filter";
import { useMemo } from "react";
import { getMoviesByGender } from "../API/API";

function Movies(): JSX.Element {
    const { genre, page } = useParams();

    const movies = useMemo(() => getMoviesByGender(genre || ""), [genre]);

    const pageNumber = parseInt(page || "1");
    const [pageMovies, maxPage] = pagination(movies, pageNumber, 19);
    
    return (
        <>
            <Navbar />
            <PageTitle title="Movies" description="The people have spoken! See the most-watched movies now!" />
            <Filter></Filter>
            <ContentDisplay movies={pageMovies} />
            <ButtonsPagination maximumPage={maxPage || 0} genre={genre || ""}></ButtonsPagination>
        </>
    );
}

export default Movies;