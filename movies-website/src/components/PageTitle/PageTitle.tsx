import { Description, Title, TitleContainer } from "./styles"

type PageTitleProps = {
    title: string,
    description: string,
}

function PageTitle({title, description}: PageTitleProps): JSX.Element {
    return(
        <>
            <TitleContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TitleContainer>
        </>
    )
}

export default PageTitle