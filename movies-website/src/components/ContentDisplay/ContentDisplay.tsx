import { useState } from "react";
import { MovieType } from "../../API/API";
import ContentCard from "../ContentCard/ContentCard";
import { ContentContainer, Section } from "./style";

type ContentDisplayProps = {
    movies: MovieType[];
};

function ContentDisplay({ movies }: ContentDisplayProps): JSX.Element {

    return (
        <Section>
            <ContentContainer>
                {movies ? movies.map((movie: MovieType) => (
                    <ContentCard
                            key={movie.title}
                            title={movie.title}
                            rating={movie.rating}
                            relesease={movie.release}
                            thumbnail={movie.thumbnail}           
                        />)
                    ) : ""}
            </ContentContainer>
        </Section>
    );
}

export default ContentDisplay;