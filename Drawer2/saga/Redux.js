import {put, call, takeEvery} from 'redux-saga/effects';
import {getMovies} from '../Api/api';
 import {GET_MOVIES,MOVIES_DATA} from '../redux/Actions';
 
 //Movie Fetch Function calls from movieSaga and then call Api and then returned data from API is 
 //send to reducer by put function
export function* movieFetch() {
  const data = yield call(getMovies);
  //console.log('I am here trying to get the data', data);
  yield put({type:MOVIES_DATA, payload: data});
}
// movieSaga function takes every action from UI and send it to movieFetch function
export function* movieSaga() {
  yield takeEvery(GET_MOVIES, movieFetch);
}
export default movieSaga;
