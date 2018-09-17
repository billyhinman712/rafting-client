import React, { Component } from 'react';

class Booking extends Component {
  render() {
    if(this.props.user){
      return (
          <div>
          	<h2>{this.props.user.firstName}'s booking list</h2>
          </div>
          {this.book}.filter(appointment => appointment.userId === user._id)forEach( appointment => {
	          <div>
	            <h4>River Name: appointment.name</h4>
	            <h4>Date: appointment.date</h4>
	            <h4>Time: appointment.time</h4>
	            <h4>Cost: appointment.cost</h4>
          	</div>
          <br></br>
        });
        );
    }
    return(
      <div>
        <p>This is a booking page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
      );
  }
}

export default Booking;