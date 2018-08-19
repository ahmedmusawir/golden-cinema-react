import React, { Component } from 'react';

export class SearchFrom extends Component {
  render() {
    return (
      <div className="form-holder pt-3">
        <form className="form">
          <div className="row mx-auto">
            <div className="form-group col-sm-8">
              <input
                className="form-control"
                type="text"
                placeholder="Search for Movie"
              />
            </div>
            <div className="form-group col-sm-4">
              <button className=" btn btn-primary form-control" type="submit">
                Find Movie
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchFrom;
