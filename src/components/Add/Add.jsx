import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';


function Add(){

    // const movie = useSelector(store => store.movieDetails);
    const genres = useSelector(store => store.movieGenres);
    const { id } = useParams(); // id from URL route

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [poster, setPoster] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        // dispatch({ 
        //     type: 'FETCH_MOVIE_BY_ID',
        //     payload: id
        // });
        dispatch({ 
            type: 'FETCH_ALL_GENRES',
        });
    }, []);

    const submitForm = (e) => {
        e.preventDefault();
        dispatch({ 
            type: 'ADD_MOVIE',
            payload: {title, description, poster, selectedGenre}, history
        });
    }


    return(
        <div>
            <h2>{id ? 'EDIT MOVIE' : 'ADD MOVIE'}</h2>
            {/* { genres.length > 0 && */}
            <form onSubmit={submitForm}>
                <p>Title: <input value={title} onChange={(e) => setTitle(e.target.value)} /></p>
                <p>Description: <input value={description} onChange={(e) => setDescription(e.target.value)} /></p>
                <p>Poster: <input value={poster} onChange={(e) => setPoster(e.target.value)} /></p>
                <select
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}>

                    {/* {genres.map(g => (
                        <option key={g.id} value={g.id}>{g.name}</option>
                    ))} */}

                    {/* {genres.map(g => {
                        return(
                            <option key={g.id} value={g.id}>{g.name}</option>
                        );
                    })} */}

                    {/* {genres.map(g => {
                        <option
                        return(
                            key={g.id} value={g.id}>{g.name}
                        );
                        </option>
                    })} */}

                    </select>
                <input type="submit" />
            </form>
        {/* } */}
        </div>
    )
}

export default Add;
