import { ReactNode, useState } from "react";
import { DropdownBox, DropdownContainer, OptionsContainer } from "./styles";

type DropdownProps = {
    title: string,
    options: ReactNode,
}

function Dropdown({title, options}: DropdownProps): JSX.Element {
    const [ishover, setIsHover] = useState(false);

    return (
        <>
            <DropdownContainer onMouseEnter={()=> setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <DropdownBox>
                    {title} <i className="fa-solid fa-caret-down"></i>
                <OptionsContainer ishover = {ishover}>
                    {options}
                </OptionsContainer>
                </DropdownBox>
            </DropdownContainer>
        </>
    )
}
export default Dropdown;