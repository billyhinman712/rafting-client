import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import './App.css';
import Footer from './layout/Footer';
import Home from './Home';
import Login from './auth/Login';
import Nav from './layout/Nav';
import Profile from './Profile';
import Signup from './auth/Signup';
import Charge from './Charge';
import Comment from './Comment';
import Booking from './Booking';
import Show from './Show';
import Failed from './Failed';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
      booking: [],
      rivers: []
    }
  }

  componentDidMount = () => {
    console.log('component did mount!');
    this.getUser();
    this.getBooking();
    this.getRivers();
  }

  getUser = () => {
    var token = localStorage.getItem('mernToken');
    if(token){
      console.log('token found in LS', token);
      // There is a token in localStorage. Try to validate it!
      axios.post(SERVER_URL + '/auth/me/from/token', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        console.log('SUCCESS', response);
        this.setState({
          user: response.data.user
        });
      })
      .catch(err => {
        console.log('ERROR', err);
        console.log('response', err.response);
        localStorage.removeItem('mernToken');
        this.setState({
          user: null
        });
      });
    }
    else {
      console.log('No token was found');
      localStorage.removeItem('mernToken');
      this.setState({
        user: null
      });
    }
  }

  getBooking = () => {
    axios.post(SERVER_URL + '/booking')
    .then(response => {
        console.log('SUCCESS', response);
        this.setState({
          booking: response.data.booking
        });
      })
      .catch(err => {
        console.log('ERROR', err);
        console.log('response', err.response);
        this.setState({
          booking: []
        });

    });
  }

  getRivers = () => {
    axios.post(SERVER_URL + '/rivers')
    .then(response => {
        console.log('SUCCESS', response);
        this.setState({
          rivers: response.data.rivers
        });
      })
      .catch(err => {
        console.log('ERROR', err);
        console.log('response', err.response);
        this.setState({
          rivers: []
        });

    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Nav user={this.state.user} updateUser={this.getUser} />
            <Route exact path="/" component={
              () => (<Home river={this.state.rivers} />)
            } />
            <Route path="/login" component={
              () => (<Login user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/signup" component={
              () => (<Signup user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/profile" component={
              () => (<Profile user={this.state.user} />)
            } />
            <Route path="/finish" component={Charge} />
            <Route path="/comment" component={Comment} />
            <Route path="/booking" component={
              () => (<Booking book={this.state.booking} user={this.state.user} />)
            } />
            <Route path="/show" component={
              () => (<Show river={this.state.rivers} />)
            } />
            <Route path="/failed" component={Failed} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
