const API_KEY = "1c506865"
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE"
export const GET_MOVIES = "GET_MOVIES"
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL"
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE"

export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
}

export function getMovies(titulo) {
return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=` + titulo)
        .then(response => response.json())
        .then(json => {
        dispatch({ type: GET_MOVIES, payload: json });
        });
    };
}

export function removeMovieFavorite(id){
    return { type: REMOVE_MOVIE_FAVORITE, payload: id };
}

export function getMovieDetail(id){
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
        //http://www.omdbapi.com/?i=tt3896198&plot=full
            .then(response => response.json())
            .then(json => {
            dispatch({ type: GET_MOVIE_DETAIL, payload: json });
            });
        };
}