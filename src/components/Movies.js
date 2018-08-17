import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import Action from './MovieAction';
import Drama from './MovieDrama';
import Comedy from './MovieComedy';
import MovieMain from './MovieMain';

export class Movies extends Component {
  render() {
    return (
      <div id="movie-main" className="container">
        <div className="row container-body my-5 p-5">
          <nav className="ml-auto">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies/action">
                  Action
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies/drama">
                  Drama
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies/comedy">
                  Comedy
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Route declaration for the sub menus */}
          <Redirect to="/movies" />
          <Route exact path="/movies/action" component={Action} />
          <Route exact path="/movies/drama" component={Drama} />
          <Route exact path="/movies/comedy" component={Comedy} />
          <Route exact path="/movies" component={MovieMain} />

          {/* Movies Main Page content */}
        </div>
        {/* end row */}
      </div>
      // end container
    );
  }
}

export default Movies;
