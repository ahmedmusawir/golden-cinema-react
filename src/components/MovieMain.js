import React, { Component } from 'react';
import SearchForm from './_movie-search/SearchFrom';
import MovieList from './_movie-search/MovieList';
import axios from 'axios';

export class MovieMain extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true
    };
  }
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'redemption') => {
    axios
      .get(`http://www.omdbapi.com/?apikey=ea71a8f&s=${query}`)
      .then(response => {
        // console.log(response.data.Search);
        this.setState({
          movies: response.data.Search,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
        this.setState({ movies: [] });
      });
  };
  render() {
    return (
      <section
        id="movie-main-search-list"
        className="main-content animated fadeIn animated fadeIn container"
      >
        <div className="form-holder">
          <article className="search-form">
            <SearchForm onSearch={this.performSearch} />
          </article>
        </div>
        <ul className="row movie-list">
          {this.state.loading ? (
            <p>Loading ...</p>
          ) : (
            <MovieList data={this.state.movies} />
          )}
        </ul>
      </section>
    );
  }
}

export default MovieMain;
