import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const goToDetails = (movieId) => {
        console.log('goToDetails CLICKED');
        // set reducer to this movie's ID (dispatch)
        dispatch({
            type: 'SET_ID',
            payload: movieId
          });
          console.log('MOVIE ID:', movieId);
        // send user to /details
        history.push('/details');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => goToDetails(movie.id)}/>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default MovieList;