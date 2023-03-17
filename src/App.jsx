import { useEffect, useState } from 'react';

import reactLogo from './assets/react.svg';
import cover from './assets/cover2.jpg';
import noimage from './assets/poster_not_found.png';
import { getMovieList, searchMovie } from './api';
import './App.css';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then(result => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMoviesList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div
          className="movie-card"
          key={1}
        >
          <img
            src={[
              `${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${movie.poster_path}`.length > 50
                ? `${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${movie.poster_path}`
                : `${noimage}`,
            ]}
            alt=""
            className="movie-img"
          />
          <div className="movie-card-detail">
            <div className="movie-title">
              {movie.title} ({movie.release_date.slice(0, 4)})
            </div>
            <div className="movie-rating">⭐ {Math.round(movie.vote_average * 10) / 10}</div>
            <div className="movie-desc">
              {movie.overview.slice(0, 250).length >= 250 ? `${movie.overview.slice(0, 250)}...` : `${movie.overview.slice(0, 250)}`}
            </div>
            <a
              href="#"
              data-toggle="modal"
              data-target="myBtn"
              className="btn-details"
            >
              see details
            </a>
          </div>
        </div>
      );
    });
  };

  const search = async q => {
    if (q.length > 2) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
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
        <PopularMoviesList />
      </div>
    </div>
  );
};

export default App;
