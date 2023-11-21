import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/movies")
      .then(resp => resp.json())
      .then(data => setMovies(data))
  }, []);

  const movieList = movies.map(movie => {
    return <MovieCard key={movie.id} />
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
