import React from 'react';
import Movie from './Movie';
import NotFound404 from '../NotFound404';
import { Route, Link, Redirect, Switch } from 'react-router-dom';

const MovieList = props => {
  let results = props.data;
  let movies;
  if (results.length > 0) {
    movies = results.map(movie => (
      <Movie
        key={movie.imdbID}
        title={movie.Title}
        year={movie.Year}
        imdbID={movie.imdbID}
        poster={movie.Poster}
      />
    ));
  } else {
    movies = <NotFound404 />;
  }
  return <React.Fragment>{movies}</React.Fragment>;
};

export default MovieList;
