import React from 'react';

const FeaturedMovieList = props => {
  return (
    <li className="list-item">
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <p>{props.plot}</p>
    </li>
  );
};

export default FeaturedMovieList;
