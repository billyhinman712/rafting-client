import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Failed extends Component {
  render() {
    return(
        <div>
          <h3>Sorry, Booking Failed!</h3>
          <h3>Please Try Again Later</h3>
          <span>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/comments">Leave a Comment</Link>
            </div>
            <div>
              <Link to="/booking">Booking list</Link>
            </div>
          </span>
        </div>
      );
  }
}

export default Failed;