import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  // console.log(params)
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(resp => resp.json())
    .then(data => setMovie(data))
  }, [movieId])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Movie Time: {movie.time}</p>
        <span className="movie-genres">{movie.genres}</span>
      </main>
    </>
  );
};

export default Movie;
