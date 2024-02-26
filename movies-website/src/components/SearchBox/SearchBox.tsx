import { useState } from "react";
import { Input, SearchBoxContainer, SearchIconContainer } from "./styles";
import { Link } from "react-router-dom";

function SearchBox(): JSX.Element {
    const [valueInput, setValueInput] = useState("");

    return (
    <>
        <SearchBoxContainer>
            <SearchIconContainer><Link to={""}><i className="fa-solid fa-magnifying-glass"></i></Link></SearchIconContainer>
            <Input type="text" placeholder="Find movies, TV shows and more"/>
        </SearchBoxContainer>
    </>
    )
}

export default SearchBox;