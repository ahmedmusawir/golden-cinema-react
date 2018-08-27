import React from 'react';
import { Link } from 'react-router-dom';

const Movie = props => {
  const { title, year, imdbID, poster } = props;
  return (
    <React.Fragment>
      <li className="col-sm-4 col-md-4 col-lg-3 movie-item animated zoomIn">
        <Link className="nav-link" to={`/movies/single/${imdbID}`}>
          <img src={poster} alt="" />
        </Link>

        <article className="text-box">
          <h5 className="movie-title text-center">{title}</h5>
          <h5 className="badge badge-danger float-right">{year}</h5>
          <h5 className="badge badge-dark float-left">imdbID: {imdbID} </h5>
        </article>
      </li>
    </React.Fragment>
  );
};

export default Movie;
