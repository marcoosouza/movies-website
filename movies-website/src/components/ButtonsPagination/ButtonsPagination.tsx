import { useState, useEffect } from "react";
import { ContainerButtons, PageText, StyledButton } from "./styles";
import { useNavigate } from "react-router-dom";

type ButtonsPaginationProps = {
    maximumPage: number,
    genre: string,
}

function ButtonsPagination({maximumPage, genre}: ButtonsPaginationProps): JSX.Element {
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/movies/${genre}/${page}`);
    }, [page, genre]);

    const goToPreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const goToNextPage = () => {
        if(page < maximumPage) {
            setPage(page + 1);
        }
    };


    return (
        <>
        <ContainerButtons>
            <StyledButton onClick={goToPreviousPage}>{"< Voltar"}</StyledButton>
                <PageText><span>{page} de {maximumPage}</span></PageText>
            <StyledButton onClick={goToNextPage}>{"Prox. >"}</StyledButton>
        </ContainerButtons>
        </>
    )
}

export default ButtonsPagination