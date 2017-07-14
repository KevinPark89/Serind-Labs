import React, { Component } from 'react';

class StarwarsForm extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange(event) {
	    if (event.target.name === 'searchValue') {
			this.props.handleChange('searchValue', event.target.value);
	    }
	    else {
	    	this.props.handleChange('radioValue', event.target.name);
	    }
	 }

	 onSubmit(event) {
	 	event.preventDefault();
	 	this.props.fetchData();
	 }

  	render() {
    	return (
			<div className="wrapper">
				<h1 className="main_header">Star Wars API Demo</h1>
				<h5>I'm looking for:</h5>
	      		<form onSubmit={this.onSubmit}>
	      			<div>
	      				<input 
	      					type="radio" 
	      					name="People" 
	      					checked={this.props.radioValue !== 'People' ? false : true} 
	      					onChange={this.handleChange} />
		      			<label>
		      				People
		      			</label>	
	      			</div>
	      			<div>
	      				<input 
	      					type="radio" 
	      					name="Planets" 
	      					checked={this.props.radioValue !== 'Planets' ? false: true} 
	      					onChange={this.handleChange} />
		      			<label>
		      				Planets
		      			</label>	
	      			</div>
	      			<div>
	      				<input 
	      					type="radio" 
	      					name="Starships"
	      					checked={this.props.radioValue !== 'Starships' ? false: true}  
	      					onChange={this.handleChange} />
		      			<label>
		      				Starships
		      			</label>	
	      			</div>
	      			<div>	
	      				<input 
	      					type="text" 
	      					name="searchValue"
	      					className="search_bar"  
	      					value={this.props.searchValue} 
	      					onChange={this.handleChange} />
	      				<input type="submit" value="Go!" />
	      			</div>
	      		</form>
			</div>
  	);
  }
}

export default StarwarsForm;
