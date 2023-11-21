import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
        <h2>{movies.title}</h2>
        <Link to={`/movie/${movies.title}`}>View Movie</Link>
    </article>
  );
};

export default MovieCard;