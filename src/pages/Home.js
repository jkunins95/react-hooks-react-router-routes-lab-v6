import { useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/movies")
      .then(resp => resp.json())
      .then(data => console.log(data))
  }, []);

  const movieList = movies.map(movie => {
    return <MovieCard key={movie.id} title={title} />
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
