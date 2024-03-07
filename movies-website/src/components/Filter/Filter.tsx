import { useNavigate } from "react-router-dom";
import { categories } from "../../constants/categories";
import Dropdown from "../Dropdown/Dropdown";
import { Options } from "../Dropdown/styles";
import { useEffect, useState } from "react";

function Filter(): JSX.Element {
    const [genre, setGenre] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
        navigate(`/movies/${genre}/1`);
    }, [genre])

    const options = categories.map((options) => {
        return <Options key={options.id} onClick={() => setGenre(options.name)}>{options.name}</Options>
    });

    return (
        <>
            <Dropdown title={"Genres"} children={options}></Dropdown>
        </>
    )
}

export default Filter