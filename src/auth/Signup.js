import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName:'',
      dob:'',
      email: '',
      password: ''
    };
  }

  handleFirstNameChange = (e) => { this.setState({ firstName: e.target.value }); }

  handleLastNameChange = (e) => { this.setState({ lastName: e.target.value }); }

  handleDobChange = (e) => { this.setState({ dob: e.target.value }); }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post(SERVER_URL + '/auth/signup', this.state)
    .then(result => {
      console.log('SUCCESS!', result);
      // Add the newly received token to LS
      localStorage.setItem('mernToken', result.data.token);
      // Update the user with a call to App.js
      this.props.updateUser();
    })
    .catch(err => {
      console.log('ERROR', err);
    });
  }

  render() {
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    return(
        <div>
          <h2>Signup To Book With Us!</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>First Name: </label>
              <input name="firstName" placeholder="What is your first name?" value={this.state.firstName} onChange={this.handleFirstNameChange} />
            </div>
            <div>
              <label>Last Name: </label>
              <input name="lastName" placeholder="What is your last name?" value={this.state.lastName} onChange={this.handleLastNameChange} />
            </div>
            <div>
              <label>Birthday: </label>
              <input type="date" name="dob" value={this.state.dob} onChange={this.handleDobChange} />
            </div>
            <div>
              <label>Email: </label>
              <input name="Email" placeholder="What is your email?" value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div>
              <label>Password: </label>
              <input name="Password" placeholder="password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
            <input type="submit" value="Sign Me Up!" className="button" />
          </form>
        </div>
      );
  }
}

export default Signup;
