import React from 'react';
import { Link } from 'react-router-dom';

const MovieSingleItem = props => {
  return (
    <div className="movie-page">
      <Link to="/movies" className="text-light">
        <i className="fa fa-arrow-circle-left" aria-hidden="true" /> Back To
        Search
      </Link>
      <li className="single-movie-item clearfix">
        <figure className="poster-holder text-center animated slideInLeft">
          <img
            className="img-fluid poster float-left"
            src={props.image}
            alt=""
          />
        </figure>
        <article className="text-content">
          <div className="content">
            <h2 className="title">{props.title}</h2>
            <h5 className="genre">{props.genre}</h5>
            <h5 className="badge badge-primary">{props.runtime}</h5>
            <p className="plot">{props.plot}</p>
            <div className="btn-holder">
              <a className="btn btn-warning float-left" href="#">
                {props.imdbRating}
              </a>
              <Link
                className="btn btn-danger float-right"
                to={{
                  pathname: '/buy-now',
                  state: { movie: props.title, poster: props.image }
                }}
              >
                Buy Now
              </Link>
            </div>
          </div>
        </article>
      </li>
    </div>
  );
};

export default MovieSingleItem;
