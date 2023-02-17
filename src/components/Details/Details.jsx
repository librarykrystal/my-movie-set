import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Details() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movieId = useSelector(store => store.movieId);
    const movie = useSelector(store => store.movieDetails);
    const movieGenres = useSelector(store => store.movieGenres);
    const { id } = useParams(); // id from URL route

    // TESTING
    // console.log('/details ID:', movieId);
    // console.log('movieDetails REDUCER:', movie);

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
        // clearing out movieDetails and movieGenres reducers:
        dispatch({ 
            type: 'CLEAR_DETAILS'
        });
        history.push("/");
    }

    return(
        <>
        {/* <h3>Movie ID TEST: {movieId}</h3> */}
        {/* <p>MOVIE DATA TEST: {JSON.stringify(movie)}</p> */}
        {/* <p>GENRES DATA TEST: {JSON.stringify(movieGenres)}</p> */}

        {/* Conditional render to avoid rendering before reducer contents update: */}
            { movieGenres.length > 0 &&
                <>
                    <h1>{movie.title}</h1>
                    <div>
                        <img src={movie.poster}/>
                    </div>
                    <div>
                        <p>{movie.description}</p>
                        <h3>Genres:</h3>
                        {movieGenres.map(genre => {
                            return(
                                <p key={genre.name}> {genre.name} </p>
                            );
                        })}
                    </div>
                </>
            }
            <button onClick={goBack}>BACK TO MOVIE LIST</button>
        </>
    )
}

export default Details;
