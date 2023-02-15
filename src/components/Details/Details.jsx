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
    console.log('movieDetails REDUCER:', movie);

    // Fetching movie details upon page load:
    useEffect(() => {
        dispatch({ 
            type: 'FETCH_MOVIE_BY_ID',
            payload: movieId
        });
    }, []);


    // TO DO
    // GET genres


    const goBack = (event) => {
        event.preventDefault();
        history.push("/");
    }

    return(
        <>
        {/* <h1>{movie[0].title}</h1> */}
        {/* <h1>{movie.title}</h1> */}
        {/* <h3>for movie with ID of {movieId}</h3> */}
        <div>{JSON.stringify(movie)}</div>
        <div>
            {/* <img src={movie[0].poster}/> */}
        </div>
        <div>
            {/* <p>{movie[0].description}</p> */}
        </div>
        <button onClick={goBack}>BACK TO MOVIE LIST</button>
        </>
    )
}

export default Details;
