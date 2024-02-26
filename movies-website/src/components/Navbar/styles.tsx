import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavbarProps } from "./Navbar";

export const Header = styled.header`
    padding-top: 2rem;
    background-color: rgb(0, 0, 0, 0.35);
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const LinksContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%
   
`

export const StyledLink = styled(Link)<NavbarProps>`
    text-decoration: none;
    color: ${({isActive}: NavbarProps) => (isActive ? 'orange': 'white')};
    transition: color 0.15s;

    &:hover{
        color: orange;
    }
`

export const LeftLinks = styled.div`
    display: flex;
    gap: 2rem;
`

export const RightLinks = styled(LeftLinks)`
    margin-left: auto;
`