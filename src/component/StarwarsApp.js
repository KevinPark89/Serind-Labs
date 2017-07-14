import React from 'react';
import StarwarsForm from './StarwarsForm';
import StarwarsList from './StarwarsList';

export const StarwarsApp = (props) => {
	let items = [];
	if (props.starwarsResults.length > 0) {
	  items = props.starwarsResults.map(item => {
	    return (
	      <li key={item.url}>
	        <StarwarsList 
	          item={item}
	          handleClick={props.handleClick} />
	      </li>
	    )
	  });
	}
	return (
		<div>
			<StarwarsForm 
			  searchValue={props.searchValue}
			  radioValue={props.radioValue}
			  handleChange={props.handleChange}
			  fetchData={props.fetchData} />

			 <ul>
			   {items}
			 </ul>
			  
		</div>
	)
}