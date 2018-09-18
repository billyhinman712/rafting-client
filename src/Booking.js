import React, { Component } from 'react';

class Booking extends Component {
  render() {
  	const appointments = this.props.book.filter(appointment => appointment.userId === this.props.user._id).map( f => {
  		return (
	          <div>
	            <h4>River Name: {f.name}</h4>
	            <h4>Date: {f.date}</h4>
	            <h4>Time: {f.time}</h4>
	            <h4>Cost: {f.cost}</h4>
          	</div>
          );
          });
    if(this.props.user){
      return (
      	<div>
          <div>
          	<h2>{this.props.user.firstName}'s booking list</h2>
          </div>
          <div>
          	{appointments}
          </div>
        </div>
          
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