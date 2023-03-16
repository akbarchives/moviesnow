import { useEffect, useState } from 'react';

import reactLogo from './assets/react.svg';
import { getMovieList, searchMovie } from './api';
import './App.css';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    // setPopularMovies(getMovieList());
    getMovieList().then(result => {
      setPopularMovies(result);
    });
  }, []);

  console.log({ popularMovies: popularMovies[0] });

  const Latest = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div key={i}>
          <h1>{movie.title}</h1>
        </div>
      );
    });
  };

  const PopularMoviesList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div
          className="movie-card"
          key={1}
        >
          <img
            src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt=""
            className="movie-img"
          />
          <div className="movie-card-detail">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-rating">
              ⭐ {movie.vote_average} {movie.genre_ids[0]}
            </div>
            <div className="movie-desc">{movie.overview}</div>
          </div>
        </div>
      );
    });
  };

  const search = q => {
    console.log({ q });
  };

  return (
    <div className="App">
      <header>
        <h1>Moviesnow</h1>
      </header>
      <input
        type="text"
        placeholder="Find Movies Title"
        name=""
        id=""
        className="movie-search"
        onChange={({ target }) => search(target.value)}
      />
      <div className="container">
        <Latest />
        <PopularMoviesList />
      </div>
    </div>
  );
};

export default App;
