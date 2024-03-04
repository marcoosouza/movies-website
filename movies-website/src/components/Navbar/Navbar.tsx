import Logo from "../Logo/Logo"
import { Header, HeaderContainer, LeftLinks, LinksContainer, RightLinks, StyledLink } from "./styles"
import logoSrc from '../../assets/logo.svg'
import SearchBox from "../SearchBox/SearchBox"


function Navbar(): JSX.Element {

    return (
        <>
            <Header>
                <HeaderContainer>
                    <Logo logoSrc = {logoSrc}></Logo>
                    <LinksContainer>
                        <LeftLinks>
                            <StyledLink to={{pathname: "/Movies"}}>Movies</StyledLink>
                            <StyledLink to={{pathname: "/"}}>Watchlist</StyledLink>
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