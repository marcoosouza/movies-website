const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = '13727d5610d9836d4eb708f0662a401f';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';


type MovieInfo = {
    id: number,
    title: string,
    rating: number,
    releseaseDate: string,
    posterSrc: string,
    backdropPath: string,
    overview: string,
    genreIds: string[],
}

export const fetchData = async () => {
        try {
            const response = await fetch(`${API_URL}?language=en-US&page=1&api_key=${API_KEY}`);
            if (!response.ok) {
                throw new Error('Error fetching response');
            }
            const data = await response.json();

            const moviesResult = data.results.map((movie: any) => ({
                id: movie.id,
                title: movie.original_title,
                rating: Math.round(movie.vote_average * 100) / 100,
                releseaseDate: movie.release_date,
                posterSrc: `${IMAGE_BASE_URL}${movie.poster_path}`
            }));

            return moviesResult;
            
        } catch (error) {
            console.error('Error', error);
            
        }
    };


async function fetchSearch(query: string) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key${API_KEY}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error fetching response');
        }
        const data = await response.json();

        const moviesResult = data.results.map((movie: any) => ({
            id: movie.id,
            title: movie.original_title,
            rating: Math.round(movie.vote_average * 100) / 100,
            releseaseDate: movie.release_date,
            posterSrc: `${IMAGE_BASE_URL}${movie.poster_path}`
        }));

        console.log(moviesResult);

        return moviesResult;
        
    } catch (error) {
        console.error('Error', error);
    
    }
}
      

