import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedMovieList = props => {
  return (
    <li className="list-item clearfix">
      <figure className="poster-holder text-center">
        <img className="img-fluid poster float-left" src={props.image} alt="" />
      </figure>
      <article className="text-content">
        <div className="content">
          <h2 className="title">{props.title}</h2>
          <h5 className="genre">{props.genre}</h5>
          <h5 className="badge badge-primary">{props.runtime}</h5>
          <p className="plot">{props.plot}</p>
          <div className="btn-holder">
            <a className="btn btn-warning float-left">{props.imdbRating}</a>
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
  );
};

export default FeaturedMovieList;
