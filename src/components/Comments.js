import React, { Component } from 'react';
import Comment from './Comment';

export class Comments extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-body my-5 p-5">
          <h2 className="text-center">Comments Area</h2>
          <Comment />
        </div>
        {/* end row */}
      </div>
      // end container
    );
  }
}

export default Comments;
