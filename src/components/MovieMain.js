import React, { Component } from 'react';
import SearchForm from './_movie-search/SearchFrom';
import MovieList from './_movie-search/MovieList';

export class MovieMain extends Component {
  render() {
    return (
      <section
        id="movie-main-search-list"
        className="main-content animated fadeIn animated fadeIn container"
      >
        <div className="form-holder">
          <article className="search-form">
            <SearchForm />
          </article>
        </div>
        <ul className="row movie-list">
          <MovieList />
        </ul>
      </section>
    );
  }
}

export default MovieMain;
