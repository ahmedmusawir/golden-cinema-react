import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div className="blog-page container">
        <div className="container-body my-5 p-5 animated fadeIn">
          <h2 className="">About This App</h2>
          <h5 className="text-uppercase font-weight-bold title">
            A simple React App focusing on UI/UX and Routing
          </h5>
          <h5>Technologies:</h5>
          <ul>
            <li>React Stateful & Stateless Components</li>
            <li>React Router</li>
            <li>React Router Redirect and Link with Params</li>
            <li>Form Validation with State</li>
            <li>Data Fetching From REST API with Axios</li>
            <li>SCSS/CSS</li>
            <li>Bootstrap 4 SCSS</li>
            <li>Animate CSS</li>
            <li>JS Local Storage</li>
            <li>OMDB API</li>
          </ul>
        </div>
        {/* end row */}
      </div>
    );
  }
}

export default About;
