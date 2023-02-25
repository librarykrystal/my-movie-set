import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import './MovieList.css'
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

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);
    // const movieId = useSelector(store => store.movieId);

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
        history.push(`/details/${movieId}`);
    }

    const goAdd = () => {
        console.log('goToDetails CLICKED');
        history.push('/add');
    }

    return (
        <ThemeProvider theme={theme}>
        <main>
            {/* <h1>MOVIE LIST</h1> */}
            <Button variant="contained" color="primary" size="small" onClick={goAdd}>ADD A MOVIE</Button>
            <section className="movies">
                
                {movies.map(movie => {
                    return (
                        <div className="listMovie" key={movie.id} >
                            <div className="movieTitle">
                                <h3>{movie.title}</h3>
                            </div>
                            <img className="poster" src={movie.poster} alt={movie.title} onClick={() => goToDetails(movie.id)}/>
                        </div>
                    );
                })}
            </section>
        </main>
        </ThemeProvider>
    );
}

export default MovieList;