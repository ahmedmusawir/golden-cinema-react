import React, { Component } from 'react';
import FeaturedMovieList from './FeaturedMovieList';
import { MovieComedyData } from '../data/movies_db.js';

export class MovieDrama extends Component {
  render() {
    let comedyMovies = MovieComedyData.map(movie => {
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
          <h1 className="badge badge-danger">Featured Comedy: </h1>
          <ul className="list-box">{comedyMovies}</ul>
        </div>
      </div>
    );
  }
}

export default MovieDrama;
