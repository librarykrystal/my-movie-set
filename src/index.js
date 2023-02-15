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
    // yield takeEvery('SET_DETAILS', movieDetails);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all error');
    }
}

function* fetchMovieDetails(action) {
    // get only the selected movie data, by Id passed in as payload
    try {
        const movie = yield axios.get(`/api/movie/${action.payload}`);
        console.log('get by ID success:', movie.data);
        yield put({ type: 'SET_DETAILS', payload: movie.data });
    } catch (error){
        console.log('get by ID error:', error);
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

// REDUCER to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
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
        default:
            return state;
    }
}

// REDUCER for GENRES of Clicked Movie
const movieGenres = (state = {}, action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
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
        movieDetails
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
