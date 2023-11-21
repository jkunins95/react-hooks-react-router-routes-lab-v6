import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(resp => resp.json())
      .then(movie => setMovies(movie))
  }, []);

  const movieList = movies.map(movie => {
    return <MovieCard key={movie.id} id={movie.id} title={movie.title} />
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;
