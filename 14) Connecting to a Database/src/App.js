import React, { useState } from "react";
import axios from "axios";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    const {
      data: { results },
    } = await axios.get("https://swapi.dev/api/films");

    const moviesDb = results.map(movie => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseData: movie.release_date,
      };
    });

    setMovies(moviesDb);
    setLoading(false);
  };

  console.log(movies);
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {loading && movies.length > 0 && <p>Loading...</p>}
        {!loading && movies.length === 0 && <p>Found no movies!</p>}
        {!loading && <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;
