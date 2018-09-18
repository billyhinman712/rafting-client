import React, { Component } from 'react';

class Show extends Component {
  render() {
  	const rivers = this.props.river.map( (r, i) => {
  		return(
  			<div>
  			<h2>{r.name}</h2>
  			<img src={r.image} alt="river"></img>
  			<p>{r.content}</p>
  			<p>{r.description}</p>
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