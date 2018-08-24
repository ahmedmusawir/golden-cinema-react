import React from 'react';
// import MovieSingle from './MovieSingle';
// import NotFound404 from '../NotFound404';
import { Route, Link, Redirect, Switch } from 'react-router-dom';

const MovieList = () => {
  return (
    <React.Fragment>
      <li className="col-sm-4 col-md-4 col-lg-3 movie-item">
        <Link className="nav-link" to={'/movies/single/tt0372784'}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
            alt=""
          />
        </Link>

        <article className="text-box">
          <h5 className="movie-title text-center">This is the Title</h5>
          <h5 className="badge badge-danger float-right">2008</h5>
          <h5 className="badge badge-dark float-left">imdbID: tt0372784</h5>
        </article>
      </li>
      <li className="col-sm-4 col-md-4 col-lg-3 movie-item">
        <Link className="nav-link" to={'/movies/single/tt0372784'}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
            alt=""
          />
        </Link>

        <article className="text-box">
          <h5 className="movie-title text-center">This is the Title</h5>
          <h5 className="badge badge-danger float-right">2008</h5>
          <h5 className="badge badge-dark float-left">imdbID: tt0372784</h5>
        </article>
      </li>
      <li className="col-sm-4 col-md-4 col-lg-3 movie-item">
        <Link className="nav-link" to={'/movies/single/tt0372784'}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
            alt=""
          />
        </Link>

        <article className="text-box">
          <h5 className="movie-title text-center">This is the Title</h5>
          <h5 className="badge badge-danger float-right">2008</h5>
          <h5 className="badge badge-dark float-left">imdbID: tt0372784</h5>
        </article>
      </li>
      <li className="col-sm-4 col-md-4 col-lg-3 movie-item">
        <Link className="nav-link" to={'/movies/single/tt0372784'}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
            alt=""
          />
        </Link>

        <article className="text-box">
          <h5 className="movie-title text-center">This is the Title</h5>
          <h5 className="badge badge-danger float-right">2008</h5>
          <h5 className="badge badge-dark float-left">imdbID: tt0372784</h5>
        </article>
      </li>
    </React.Fragment>
  );
};

export default MovieList;
