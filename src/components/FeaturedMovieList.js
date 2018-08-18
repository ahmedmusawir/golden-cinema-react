import React from 'react';

const FeaturedMovieList = props => {
  return (
    <li className="list-item clearfix">
      <figure className="poster-holder text-center">
        <img className="img-fluid poster float-left" src={props.image} alt="" />
      </figure>
      <article className="text-content">
        <div className="content">
          <h2>{props.title}</h2>
          <p>{props.plot}</p>
        </div>
      </article>
    </li>
  );
};

export default FeaturedMovieList;
