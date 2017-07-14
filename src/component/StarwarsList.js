import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StarwarsList extends Component {
	render () {
		return (
			<div>
				<Link to={`/details/${this.props.item.url.replace('http://swapi.co/api/', '')}`} onClick={() => this.props.handleClick(this.props.item)}>
					<h6>{this.props.item.name}</h6>
					<i className="fa fa-arrow-right" aria-hidden="true"></i>
				</Link>
			</div>

		)
	}
}

export default StarwarsList;