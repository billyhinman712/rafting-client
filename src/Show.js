import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from './constants/server';
import { Redirect } from 'react-router-dom';

class Show extends Component {
	constructor(props){
		super(props);
		this.state ={
			redirect: null,
			name:'',
			date:'',
			time:'',
			userId:''
		}
	}

	handleChange = (e) => {
		this.setState({ 
		 [e.target.name]: e.target.value,
		 userId: this.props.user.id,
		 name: 'help'
		});
	}

	handleBooking = (e) => {
		axios.post(SERVER_URL + '/book', {
			date: this.state.date,
			time: this.state.time,
			userId: this.props.user.id,
			name: e.target.name
		})
    .then(response => {
        console.log('SUCCESS', response);
        this.setState({redirect: true});
      })
      .catch(err => {
        console.log('ERROR', err);
        console.log('response', err.response);
        this.setState({redirect: false});
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
  				<form name={r.name} onSubmit={this.handleBooking}>
	  				<label>Day</label>
	  				<input name="date" type="date" OnChange={this.handleChange}></input>
	  				<label>Time</label>
	  				<input name="time" type="time" OnChange={this.handleChange}></input>
	  				<input type="submit" value="BOOK IT!"/>
	  			</form>
  			</div>
  			);
  	});

  	if(this.state.redirect === true){
  		return <Redirect to="/finish" />
  	} else if(this.state.redirect === false){
  		return <Redirect to="/failed" />
  	}
      return (
          <div>
            <h1>River Info Page</h1>
            {rivers}
          </div>
      );
    
  }
}

export default Show;