import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from './constants/server';

class Show extends Component {

	handleBooking = () => {
		axios.post(SERVER_URL + '/book')
    .then(response => {
        console.log('SUCCESS', response);
      })
      .catch(err => {
        console.log('ERROR', err);
        console.log('response', err.response);
      });
  	
	}

  render() {
  	const rivers = this.props.river.map( (r, i) => {
  		return(
  			<div>
  			<h2>{r.name}</h2>
  			<img src={r.image} alt="river"></img>
  			<p>{r.content}</p>
  			<p>{r.description}</p>
  			<label>Day</label>
  			<input type="date"></input>
  			<label>Time</label>
  			<input type="time"></input>
  			<button onClick={this.handleBooking}>BOOK IT!</button>
  			</div>
  			);
  	});
      return (
          <div>
            <h1>River Info Page</h1>
            {rivers}
          </div>
      );
    
  }
}

export default Show;