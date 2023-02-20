import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Details.css'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';

const theme = createTheme({
    palette: {
      primary: {
        main: grey[300],
      },
    },
  });

function Details() {

    const dispatch = useDispatch();
    const history = useHistory();
    // const movieId = useSelector(store => store.movieId);    // now using URL id
    const movie = useSelector(store => store.movieDetails);
    const movieGenres = useSelector(store => store.movieGenres);
    const { id } = useParams(); // id from URL route

    // TESTS
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
        <ThemeProvider theme={theme}>
        <div className="detailsBody">
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
                        <div className="genres">

                            {/* Conditionally render singular/pluralized based upon number of genres: */}
                            { movieGenres.length == 1 &&
                                <h3>Genre:</h3>
                            }
                            { movieGenres.length > 1 &&
                                <h3>Genres:</h3>
                            }

                            {/* Loop through genres and render each to DOM: */}
                            {movieGenres.map(genre => {
                                return(
                                    <p key={genre.name}> {genre.name} </p>
                                );
                            })}
                        </div>
                    </div>
                </>
            }
            <Button variant="contained" color="primary" onClick={goBack}>BACK TO MOVIE LIST</Button>
        </div>
        </ThemeProvider>
    )
}

export default Details;
