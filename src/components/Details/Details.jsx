import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Details() {

    const dispatch = useDispatch();
    const history = useHistory();
    // const movieId = useSelector(store => store.movieId);    // now using useParams id instead
    const movie = useSelector(store => store.movieDetails);
    const movieGenres = useSelector(store => store.movieGenres);
    const { id } = useParams(); // id from URL route

    // console.log('/details ID:', movieId);
    console.log('movieDetails REDUCER:', movie);

    // Fetching movie details and genres on page load:
    useEffect(() => {
        dispatch({ 
            type: 'FETCH_MOVIE_BY_ID',
            payload: id
        });
        dispatch({ 
            type: 'FETCH_MOVIE_GENRES',
            payload: id
        });
    }, []);

    const goBack = (event) => {
        event.preventDefault();
        // clear out movieDetails reducer
        dispatch({ 
            type: 'CLEAR_DETAILS'
        });
        history.push("/");
    }

    return(
        <>
        {/* <h1>{movie[0].title}</h1> */}
        {/* <h3>for movie with ID of {movieId}</h3> */}
        <p>MOVIE: {JSON.stringify(movie)}</p>
        <br/>
        <p>GENRES: {JSON.stringify(movieGenres)}</p>
        <div>
            <img src={movie.poster}/>
        </div>
        <div>
            {/* <p>{movie[0].description}</p> */}
        </div>
        <button onClick={goBack}>BACK TO MOVIE LIST</button>
        </>
    )
}

export default Details;
