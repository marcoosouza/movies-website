import { ReactNode, useState } from "react";
import { DropdownBox, DropdownContainer, OptionsContainer } from "./styles";

type DropdownProps = {
    title: string,
    children: ReactNode,
}

function Dropdown({title, children}: DropdownProps): JSX.Element {
    const [ishover, setIsHover] = useState(false);

    return (
        <>
            <DropdownContainer onMouseEnter={()=> setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <DropdownBox>
                    {title} <i className="fa-solid fa-caret-down"></i>
                <OptionsContainer ishover = {ishover}>
                    {children}
                </OptionsContainer>
                </DropdownBox>
            </DropdownContainer>
        </>
    )
}
export default Dropdown;