import { useState } from "react";
import { Input, SearchBoxContainer, SearchIconContainer } from "./styles";
import { Link } from "react-router-dom";

function SearchBox(): JSX.Element {
    const [query, setQuery] = useState("");

    let route = query ? `/search/${query}` : "";

    return (
    <>
        <SearchBoxContainer>
        <SearchIconContainer><Link to={route}><i className="fa-solid fa-magnifying-glass"></i></Link></SearchIconContainer>
            <Input type="text" placeholder="Find movies, TV shows and more" onChange={(e) => {setQuery(e.target.value.trim())}}/>
        </SearchBoxContainer>
    </>
    )
}

export default SearchBox;