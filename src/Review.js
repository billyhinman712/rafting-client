import React, { Component } from 'react';

class Review extends Component {
  render() {
  	const post = this.props.comment.map(c => {
		return (
  			<div>
  			<h2>From:{c.firstName} {c.lastName}</h2>
  			<p>{c.star}</p>
  			<p>{c.description}</p>
  			</div>
  			);
  	});
  	return(
    <div>{post}</div>
    );
  }
}

export default Review;