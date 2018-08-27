import React, { Component } from 'react';
import MovieSingleItem from './MovieSingleItem';
import axios from 'axios';

export class MovieSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://www.omdbapi.com/?apikey=ea71a8f&i=${id}`)
      .then(response => {
        // console.log(response.data);
        this.setState({ movie: response.data });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  render() {
    const { movie } = this.state;
    return (
      <MovieSingleItem
        title={movie.Title}
        released={movie.Released}
        genre={movie.Genre}
        runtime={movie.Runtime}
        plot={movie.Plot}
        image={movie.Poster}
        imdbRating={movie.imdbRating}
      />
    );

    return <ul className="list-box">{movie}</ul>;
  }
}

export default MovieSingle;
