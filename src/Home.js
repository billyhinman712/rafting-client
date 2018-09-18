import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from './constants/server';
import { Redirect } from 'react-router-dom';
import Review from './Review';

class Home extends Component {
	constructor(props){
		super(props);
		this.state ={
			comment: null,
			redirect: false
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
          redirect: false,
          showReveiw: false
        });

    });
  }

	handleShowReveiw = () => {
		this.setState({
			showReveiw: true
		});
	}

	handleShowRiver = () => {
		console.log("handling show river");
		this.setState({redirect: true}); 
	}

  render() {
  	const rivers = this.props.river.map( (r, i) => {
  		// if(i%2===0) {
  		// 	return //some stuff
  		// } else {
  		// 	return // other stuff
  		// }
  		return (
  			<div>
  			<h2>{r.name}</h2>
  			<img src={r.image} alt="river"></img>
  			<p>{r.content}</p>
  			<button onClick={this.handleShowRiver}>Learn More</button>
  			</div>
  			);
  	});

		if(this.state.redirect){
			return <Redirect to="/show" />;
		}

    return(
    	<div>
    		<div>
	    		<h2>About Us</h2>
	    		<img className="left" src="https://wetplanetwhitewater.com/wp-content/uploads/2015/03/15049009543_5f07e94e47_o-1.jpg"></img>
	    		<p>We guide people down several rivers of all difficulties. We spend about 4 hours ridding down the river. We provide the raft, safty equipment and oars. All you need to bring is a possitive, can do attitude!</p>
	    	</div>
	    	<div>
		    	<h2>Rivers We Explore</h2>
	        {rivers}
	        <button onClick={this.handleShowReview}>Reviews</button>
	        { this.state.showReview ? <Review comment={this.state.comment}/> : null }
	       </div>
      </div>
      );
  }
}

export default Home;
