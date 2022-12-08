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
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { ColorGame } from './ColorGame';
import Button from '@mui/material/Button';
import { About } from './About';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { MovieDetails } from './MovieDetails';

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
              // movies={moviesList.filter((mv) =>
              //   mv.name.toLowerCase().includes(search.toLowerCase())
              // )}
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

export default App;

