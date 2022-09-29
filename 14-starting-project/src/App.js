import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = async () => {
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();

    const fetchedMovies = data.results.map((film) => ({
      id: film.episode_id,
      title: film.title,
      openingText: film.opening_crawl,
      releaseDate: film.release_date,
    }));

    setMovies(fetchedMovies);
 };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
