import styled from "styled-components";

type AlignItemsFlex = "stretch" | "center" | "start" | "end";
type JustifyContentFlex = "start" | "center" | "space-between" | "space-around" | "space-evenly" | "end";

type FlexboxProps = {
    alignItems?: AlignItemsFlex,
    justifyContent?: JustifyContentFlex
    flexDirection?: "column" | "row";
}

export const Flexbox = styled.div<FlexboxProps>`
    justify-content: ${({justifyContent = "start"}) => justifyContent};
    align-items: ${({alignItems = "stretch"}) => alignItems},
    flex-direction: ${({flexDirection = "row"}) => flexDirection};
`