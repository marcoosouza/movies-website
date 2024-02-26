import Logo from "../Logo/Logo"
import { Header, HeaderContainer, LeftLinks, LinksContainer, RightLinks, StyledLink } from "./styles"
import logoSrc from '../../assets/logo.svg'
import { useState } from "react"
import SearchBox from "../SearchBox/SearchBox"

export type NavbarProps = {
    isActive: boolean;
}

function Navbar(): JSX.Element {
    const [activeLink, setActiveLink] = useState("")

    return (
        <>
            <Header>
                <HeaderContainer>
                    <Logo logoSrc = {logoSrc}></Logo>
                    <LinksContainer>
                        <LeftLinks>
                            <StyledLink isActive={activeLink === "Movies"} onClick={() => setActiveLink("Movies")} to={{pathname: "/Movies"}}>Movies</StyledLink>
                            <StyledLink isActive={activeLink === "TV Series"} onClick={() => setActiveLink("TV Series")} to={{pathname: "/"}}>TV Series</StyledLink>
                            <StyledLink isActive={activeLink === "Watchlist"} onClick={() => setActiveLink("Watchlist")} to={{pathname: "/"}}>Watchlist</StyledLink>
                        </LeftLinks>
                        <RightLinks>
                            <SearchBox></SearchBox>
                        </RightLinks>
                    </LinksContainer>
                </HeaderContainer>
            </Header>
        </>
    )
}

export default Navbar