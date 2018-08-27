import React from 'react';
import { Link } from 'react-router-dom';

const MovieSingleItem = props => {
  return (
    <div className="movie-page">
      <Link to="/movies" className="text-light">
        <i class="fa fa-arrow-circle-left" aria-hidden="true" /> Back To Search
      </Link>
      <li className="single-movie-item clearfix">
        <figure className="poster-holder text-center">
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
              <a className="btn btn-danger float-right" href="#">
                Buy Now
              </a>
            </div>
          </div>
        </article>
      </li>
    </div>
  );
};

export default MovieSingleItem;
