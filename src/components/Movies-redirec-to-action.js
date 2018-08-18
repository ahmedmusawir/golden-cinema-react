import React, { Component } from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import Action from './MovieAction';
import Drama from './MovieDrama';
import Comedy from './MovieComedy';
import MovieMain from './MovieMain';

export class Movies extends Component {
  // console.log(this.props.match);

  render() {
    const match = this.props.match;

    return (
      <div id="movie-main" className="container">
        <div className="row container-body my-5 p-5">
          <nav className="ml-auto">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <NavLink className="nav-link" to={`${match.url}/action`}>
                  Action
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`${match.url}/drama`}>
                  Drama
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`${match.url}/comedy`}>
                  Comedy
                </NavLink>
              </li>
            </ul>
            <p className="badge badge-secondary float-right mt-1">
              FEATURED COLLECTION
            </p>
          </nav>

          {/* Route declaration for the sub menus */}
          <Switch>
            <Route
              exact
              path={match.path}
              render={() => <Redirect to={`${match.path}/action`} />}
            />
            <Route path={`${match.path}/action`} component={Action} />
            <Route path={`${match.path}/drama`} component={Drama} />
            <Route path={`${match.path}/comedy`} component={Comedy} />
            <Route path={`${match.path}/movies`} component={MovieMain} />
          </Switch>

          {/* Movies Main Page content */}
        </div>
        {/* end row */}
      </div>
      // end container
    );
  }
}

export default Movies;
