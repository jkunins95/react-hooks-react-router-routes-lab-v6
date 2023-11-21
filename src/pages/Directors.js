import { useEffect, useState } from "react";

import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(resp => resp.json())
    .then(data => setDirectors(data))
  }, [])

  const directorList = directors.map(director => {
    return <article key={director.id}>
      <h2>{director.name}</h2>
      <li>{director.movies}</li>
    </article>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorList}
      </main>
    </>
  );
};

export default Directors;
