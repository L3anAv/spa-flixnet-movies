
// -->  Fetch Funcion Para Petición Multiple (Series, Peliculas)

export async function fetchMovies(url) {
    const response = await fetch(url)
    const res = await response.json()
    return res.results
}

// --> Variabes de API 

const CANTIDAD_DIAPOS_SLIDER = 3,
      API_DB = "https://api.themoviedb.org/3",
      API_DB_MOVIE = `${API_DB}/movie`,
      API_DB_TVSERIES = `${API_DB}/tv`,
      API_KEY = "0edebfba89e9884bf322b86515be4721",
      API_DB_MOVIE_POPULARES = `${API_DB_MOVIE}/popular?api_key=${API_KEY}&language=es-AR&page=1`,
      API_DB_MOVIE_UPCOMING = `${API_DB_MOVIE}/upcoming?api_key=${API_KEY}&language=es-AR&page=1`,
      API_DE_MOVIE_RATED = `${API_DB_MOVIE}/top_rated?api_key=${API_KEY}&language=es-AR&page=1`,
      API_DB_TVSERIES_POPULARES = `${API_DB_TVSERIES}/popular?api_key=${API_KEY}&language=es-AR&page=1`,
      API_IMG = "https://image.tmdb.org/t/p/original",
      API_MOVIE_SIN_GENERO = 'https://api.themoviedb.org/3/discover/movie?api_key=0edebfba89e9884bf322b86515be4721&language=es-AR&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=',
      API_MOVIE_ACTION = `${API_MOVIE_SIN_GENERO}28`;


// --> Exportando las variables.

export default {
    API_DB,
    API_DB_MOVIE,
    API_DB_TVSERIES,
    API_KEY,
    API_DB_MOVIE_POPULARES,
    API_DB_TVSERIES_POPULARES,
    API_DB_MOVIE_UPCOMING,
    API_DE_MOVIE_RATED,
    CANTIDAD_DIAPOS_SLIDER,
    API_IMG,
    API_MOVIE_SIN_GENERO,
    API_MOVIE_ACTION
}