import React, { useEffect, useState } from 'react';
import { API } from './global';
import { Movie } from './Movie';

export function MovieList() {

    const [moviesList, setMoviesList] = useState([])

    useEffect(()=>{
    fetch(`${API}/movies`)
    .then((res)=>res.json())
    .then((mvs)=>setMoviesList(mvs))
    },[])

    return (
        <div className="movie-list">
            {moviesList.map((mv, index) => (
                <Movie key={index} movie={mv} id={mv.id} />
            ))}
        </div>
    );
}
