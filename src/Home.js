import React, { Component } from 'react';

class Home extends Component {
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
        <div>{rivers}</div>
      );
  }
}

export default Home;
