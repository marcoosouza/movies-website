
import ContentCard, { ContentCardProps } from "../ContentCard/ContentCard";
import { ContentContainer, Section } from "./style";

type ContentDisplayProps = {
    movies: ContentCardProps[] | undefined
}

function ContentDisplay({movies}: ContentDisplayProps): JSX.Element {

    return (
        <Section>
            <ContentContainer>
                {movies ? movies.map((movie: ContentCardProps)  => (
                    <ContentCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        rating={movie.rating}
                        releseaseDate={movie.releseaseDate}
                        posterSrc={movie.posterSrc}
                        movies={undefined}                    />
                )) : ""}
            </ContentContainer>
        </Section>
    );
}

export default ContentDisplay;


