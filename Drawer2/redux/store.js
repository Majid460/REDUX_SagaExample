import {configureStore} from '@reduxjs/toolkit';
import {applyMiddleware, createStore} from 'redux';
import {getDefaultMiddleware} from '@reduxjs/toolkit';
import movieReducer from './Reducer';
import createSagaMiddleware from '@redux-saga/core';
import movieSaga from '../saga/Redux';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: movieReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(movieSaga);
export default store;
