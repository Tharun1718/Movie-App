import { useState } from 'react';
import React from 'react';
import { Counter } from "./Counter";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";

export function Movie({ movie, id }) {
    // const movie = {
    //   name: "Vikram",
    //   poster: "https://m.media-amazon.com/images/M/MV5BMjAxZDEyZTUtMTdiMC00M2FkLWFlYWItZTQ3NWQzNzY2NDdjXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    //   rating: 8.4,
    //   summary: "Members of a black ops team must track and eliminate a gang of masked murderers."
    // };
    const styles = {
        color: movie.rating >= 8 ? "green" : "red"
    };
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    return (
        <Card className='movie-container'>
            <img src={movie.poster} alt={movie.name} className="movie-poster" />
            <CardContent>
                <div className="movie-specs">
                    <h2 className="movie-name">
                        {movie.name}
                        <IconButton
                            onClick={() => setShow(!show)}
                            color="primary"
                            aria-label="delete"
                        >
                            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                        <IconButton
                            onClick={() => navigate(`/movies/${id}`)}
                            color="primary"
                            aria-label="delete"
                        >
                            <InfoIcon />
                        </IconButton>
                    </h2>
                    <p style={styles} className="movie-rating">⭐{movie.rating}</p>
                </div>

                {show ? <p className="movie-summary">{movie.summary}</p> : null}
            </CardContent>
            <CardActions>
                <Counter />
            </CardActions>
        </Card>
    );
}
