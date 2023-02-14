import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Details() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movieId = useSelector(store => store.movieId);
    const movie = useSelector(store => store.movieDetails);

    // console.log('/details ID:', movieId);
    // console.log('movieDetails REDUCER:', movie);

    // Fetching movie details upon page load:
    useEffect(() => {
        dispatch({ 
            type: 'FETCH_MOVIE_BY_ID',
            payload: movieId});
    }, []);

    // TO DO
    // GET genres by ID

    const goBack = (event) => {
        event.preventDefault();
        history.push("/");
    }

    // TO DO
    // Dig into movie object to get each value on DOM (currently just stringified)

    return(
        <>
        <h1>{movie[0].title}</h1>
        {/* <h3>for movie with ID of {movieId}</h3> */}
        {/* <div>{JSON.stringify(movie)}</div> */}
        <div>
            <img src={movie[0].poster}/>
        </div>
        <div>
            <p>{movie[0].description}</p>
        </div>
        <button onClick={goBack}>BACK TO MOVIE LIST</button>
        </>
    )
}

export default Details;
