import {GET_MOVIES,MOVIES_DATA} from './Actions';

const initialState = {
  movies: []
}

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {...state};
    case MOVIES_DATA:
      return {...state, movies: action.payload};
    default:
      return state;
  }
}
export default movieReducer;
export const moviesData = state => state.movies;
