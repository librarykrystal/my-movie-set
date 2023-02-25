import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE_BY_ID', fetchMovieDetails);
    yield takeEvery('FETCH_MOVIE_GENRES', fetchMovieGenres);
    yield takeEvery('FETCH_ALL_GENRES', fetchAllGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
}

// SAGA to get ALL movies from database
function* fetchAllMovies() {
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all error');
    }
}

// SAGA to get ALL genres from database
function* fetchAllGenres() {
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get all GENRES:', genres.data);
        yield put({ type: 'SET_ALL_GENRES', payload: genres.data });
    } catch {
        console.log('get all error');
    }
}

// SAGA to get only the selected movie's data, using movie id passed in as payload
function* fetchMovieDetails(action) {
    try {
        const movie = yield axios.get(`/api/movie/${action.payload}`);
        console.log('get MOVIE by ID success:', movie.data);
        yield put({ type: 'SET_DETAILS', payload: movie.data[0] });
        // ^ [0] to send along only the object (at index 0) within the payload array
    } catch (error){
        console.log('get MOVIE by ID error:', error);
    }
}

// SAGA to get only the selected movie's GENRES, using movie id passed in as payload
function* fetchMovieGenres(action) {
    try {
        const movGenres = yield axios.get(`/api/genre/${action.payload}`);
        console.log('get mGENRES by ID success:', movGenres.data);
        yield put({ type: 'SET_GENRES', payload: movGenres.data });
    } catch (error){
        console.log('get mGENRES by ID error:', error);
    }
}

// SAGA to ADD MOVIE
function* addMovie(action) {
    console.log('POST action:', action.payload);
    try {
        yield axios.post(`/api/movie`, action.payload);
        console.log('ADD MOVIE SUCCESS data:', movie.data);
        if (action.history){
            action.history.push('/');
        }
    } catch (error){
        console.log('ADD MOVIE ERROR:', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// REDUCER to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// REDUCER to store all movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// REDUCER for Clicked Movie ID
const movieId = (state = 0, action) => {
    switch (action.type) {
        case 'SET_ID':
            return action.payload;
        default:
            return state;
    }
}

// REDUCER for Clicked Movie details from database
const movieDetails = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        case 'CLEAR_DETAILS':
            console.log('CLEARING DETAILS');
            return {};
        default:
            return state;
    }
}

// REDUCER for GENRES of Clicked Movie
const movieGenres = (state = {}, action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        case 'CLEAR_DETAILS':
            console.log('CLEARING GENRES');
            return {};
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieId,
        movieDetails,
        movieGenres
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
