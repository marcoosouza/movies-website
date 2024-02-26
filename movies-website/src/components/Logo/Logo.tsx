import { Link } from "react-router-dom"
import { LogoContainer } from "./styles"

type LogoSrc = {
    logoSrc: string,
}

function Logo({logoSrc}: LogoSrc): JSX.Element {
    return (
        <>
            <LogoContainer>
                <Link to={{pathname: "/"}}><img src={logoSrc} alt="logo" /></Link>
            </LogoContainer>
        </>
    )
}

export default Logo