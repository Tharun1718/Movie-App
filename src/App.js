import logo from './logo.svg';
import './App.css';
import React from 'react'
import { MovieList } from './MovieList';
import { useState } from 'react';
import { AddMovie } from './AddMovie';
import { INITIAL_MOVIE_LIST } from './INITIAL_MOVIE_LIST';
import { INITIAL_USER_LIST } from './INITIAL_USER_LIST';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { Routes, Route, Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ColorGame } from './ColorGame';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function App() {
  const [moviesList, setMoviesList] = useState(INITIAL_MOVIE_LIST);
  const users = INITIAL_USER_LIST;
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Movie App
          </Typography> */}
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/movies")}>Movies</Button>
          <Button color="inherit" onClick={() => navigate("/movies/add")}>Add Movies</Button>
          <Button color="inherit" onClick={() => navigate("/color-game")}>Color Game</Button>
          <Search sx={{ marginLeft: "auto" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>
      {/* <AddMovie setMoviesList={setMoviesList} moviesList={moviesList} /> */}

      {/* <MovieList movies={moviesList.filter((mv) =>
        mv.name.toLowerCase().includes(search.toLowerCase()))} /> */}
      {/* <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/movies/add">Add Movie</Link>
        </li>
        <li>
          <Link to="/color-game">Color Game</Link>
        </li>
      </ul> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route
          path="/movies"
          element={
            <MovieList
              movies={moviesList.filter((mv) =>
                mv.name.toLowerCase().includes(search.toLowerCase())
              )}
            />
          }
        />
        <Route
          path="/movies/add"
          element={<AddMovie setMoviesList={setMoviesList} moviesList={moviesList} />}
        />
        <Route
          path="/color-game"
          element={<ColorGame />}
        />
        <Route path="/movies/:id" element={<MovieDetails moviesList={moviesList} />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

function MovieDetails({ moviesList }) {
  const { id } = useParams();
  const movie = moviesList[id];
  console.log(movie);
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

function NotFound() {
  const styles = {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover"
  }
  return (
    <div>
      <img style={styles}
        src="https://cdn.dribbble.com/users/644529/screenshots/2662296/404.gif"
        alt=" 404 ERROR-Page not found"
      />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to Home Page 😍💖🙌</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>Welcome to About Page 😎😃</h1>
    </div>
  );
}

export default App;

