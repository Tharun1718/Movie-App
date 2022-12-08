import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { API } from './global';

export function MovieDetails() {
  const { id } = useParams();
  // const movie = moviesList[id];
  // console.log(movie);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((res) => res.json())
      .then((mv) => setMovie(mv));
  },[]);


  const styles = {
    color: movie.rating >= 8 ? "green" : "red"
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="550px"
        src={movie.trailer}
        title="Vendhu Thanindhathu Kaadu Official Trailer |Silambarasan TR|Gautham Vasudev Menon| @A. R. Rahman"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
      ></iframe>
      <div className="movie-details-container">
        <div className="movie-specs">
          <h2 className="movie-name">
            {movie.name}
          </h2>
          <p style={styles} className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          variant="contained"
          onClick={() => navigate(-1)}
          startIcon={<KeyboardBackspaceIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
