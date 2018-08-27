import React, { Component } from 'react';

export class SearchFrom extends Component {
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  };
  render() {
    return (
      <div className="form-holder pt-3">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="row mx-auto">
            <div className="form-group col-sm-8">
              <input
                className="form-control"
                type="search"
                onChange={this.onSearchChange}
                name="search"
                placeholder="Search A Movie ..."
                ref={input => (this.query = input)}
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
