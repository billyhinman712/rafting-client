import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Charge extends Component {
  render() {
    return(
        <div>
          <h3>Thank You For Booking With River Raders</h3>
          <span>
            <Link to="/">Home</Link>
            <br></br>
            <br></br>
            <Link to="/comments">Leave a Comment</Link>
          </span>
        </div>
      );
  }
}

export default Charge;