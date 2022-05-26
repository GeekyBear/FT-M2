import { ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE } from '../actions' 

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};

function rootReducer(state = initialState, {type, payload}) { // Hago desctructoring de (state = initialState, action)
    if (type === ADD_MOVIE_FAVORITE) {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(payload)
        }
    };
    if (type === GET_MOVIES) {
        return {
          ...state,
          moviesLoaded: payload.Search
        };
    };
    if (type === GET_MOVIE_DETAIL) {
      return{
        ...state,
        movieDetail: payload
      }
    };

    if (type === REMOVE_MOVIE_FAVORITE) {
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== payload)
        // Filter devuelve un arreglo nuevo, que deja afuera la peli que tenga el id "buscado"
      }
    };

    return state;
 }
  
export default rootReducer;