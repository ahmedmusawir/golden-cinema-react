import React, { Component } from 'react';
import FeaturedMovieList from './FeaturedMovieList';
import { MovieDramaData } from '../data/movies_db.js';

export class MovieDrama extends Component {
  render() {
    let dramaMovies = MovieDramaData.map(movie => {
      return (
        <FeaturedMovieList
          key={movie.imdbID}
          title={movie.Title}
          released={movie.Released}
          genre={movie.Genre}
          actors={movie.Actors}
          plot={movie.Plot}
          image={movie.Poster}
          imdbRating={movie.imdbRating}
        />
      );
    });

    return (
      <div className="container movie-category-list-container">
        <div className="container-body animated fadeIn">
          <h1>Featured Drama: </h1>
          <ul className="list-box">{dramaMovies}</ul>
        </div>
      </div>
    );
  }
}

export default MovieDrama;
