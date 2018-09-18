import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from './constants/server';
import Review from './Review';

class Home extends Component {
	constructor(props){
		super(props);
		this.state ={
			comment: null
		}
	}

	componentDidMount = () => {
		this.getComments();
	}

	getComments = () => {
    axios.post(SERVER_URL + '/comments')
    .then(response => {
        console.log('SUCCESS', response);
        this.setState({
          comment: response.data.comment
        });
      })
      .catch(err => {
        console.log('ERROR', err);
        console.log('response', err.response);
        this.setState({
          comment: null,
          showReveiw: false
        });

    });
  }

	handleShowReveiw = () => {
		this.setState({
			showReveiw: true
		});
	}

  render() {
  	const rivers = this.props.river.map( (r, i) => {
  		return (
  			<div>
  			<h2>{r.name}</h2>
  			<p>{r.content}</p>
  			<img src={r.image} className={i%2 === 0 ? 'right' : 'left'} alt="river"></img>
  			</div>
  			);
  	});
    return(
    	<div>
        <div>{rivers}</div>
        <button onClick={this.handleShowReview}>Reviews</button>
        { this.state.showReview ? <Review comment={this.state.comment}/> : null }
      </div>
      );
  }
}

export default Home;
