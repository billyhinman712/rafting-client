import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Charge extends Component {
  render() {
    return(
        <div>
          <h3>Thank You For Booking With River Raders</h3>
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

export default Charge;