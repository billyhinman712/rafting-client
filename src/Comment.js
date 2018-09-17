import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';

class Comment extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName:'',
      stars:'',
      description:''
    };
  }

  handleFirstNameChange = (e) => { this.setState({ firstName: e.target.value }); }

  handleLastNameChange = (e) => { this.setState({ lastName: e.target.value }); }

  handleDescriptoinChange = (e) => { this.setState({ description: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post(SERVER_URL + '/comment', this.state)
    .then(result => {
      console.log('SUCCESS!', result);
      <Redirect to="/" />
    })
    .catch(err => {
      console.log('ERROR', err);
    });
  }
  render() {
    return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input name="firstName" placeholder="What is your first name?" value={this.state.firstName} onChange={this.handleFirstNameChange} />
            </div>
            <br></br>
            <div>
              <input name="lastName" placeholder="What is your last name?" value={this.state.lastName} onChange={this.handleLastNameChange} />
            </div>
            <br></br>
            <div>
              <input name="description" type="text" value={this.state.description} onChange={this.handleDescriptoinChange} />
            </div>
            <br></br>
            <input type="submit" value="Leave Comment!" className="button" />
          </form>
        </div>
      );
  }
}

export default Comment;