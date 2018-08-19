import React from 'react';

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
  );
};

export default FeaturedMovieList;
