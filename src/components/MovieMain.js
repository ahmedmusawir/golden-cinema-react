import React, { Component } from 'react';
import SearchForm from './_movie-search/SearchFrom';
import MovieList from './_movie-search/MovieList';

export class MovieMain extends Component {
  render() {
    return (
      <section
        id="movie-main-search-list"
        className="main-content animated fadeIn animated fadeIn"
      >
        <div className="form-holder">
          <article className="search-form">
            <SearchForm />
          </article>
        </div>
        <article className="row movie-list">
          <MovieList />
        </article>
      </section>
    );
  }
}

export default MovieMain;
