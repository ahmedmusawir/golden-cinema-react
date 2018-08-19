import React, { Component } from 'react';
import FeaturedMovieList from './FeaturedMovieList';
import { MovieActionData } from '../data/movies_db.js';

export class MovieAction extends Component {
  render() {
    let actionMovies = MovieActionData.map(movie => {
      return (
        <FeaturedMovieList
          key={movie.imdbID}
          title={movie.Title}
          released={movie.Released}
          genre={movie.Genre}
          runtime={movie.Runtime}
          plot={movie.Plot}
          image={movie.Poster}
          imdbRating={movie.imdbRating}
        />
      );
    });

    return (
      <div className="container movie-category-list-container">
        <div className="container-body animated fadeIn">
          <h1 className="badge badge-danger">Featured Action: </h1>
          <ul className="list-box">{actionMovies}</ul>
        </div>
      </div>
    );
  }
}

export default MovieAction;
