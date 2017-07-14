import React, { Component } from 'react';
import './App.css';

import {StarwarsApp} from './component/StarwarsApp'
import StarwarsItem from './component/StarwarsItem'
import $ from 'jquery';
import { 
    BrowserRouter as Router, 
    Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: 'wing', 
      radioValue: 'Starships',
      starwarsResults: {},
      selectedItem: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(name, value) {
    this.setState({[name]: value});
  }
  handleClick(item) {
    this.setState({selectedItem: item});
  }
  fetchData(event) {              
      $.ajax({
        url: `https://swapi.co/api/${this.state.radioValue.toLowerCase()}/?search=${this.state.searchValue}`,
        method: 'GET',
        dataType: 'json'
      })
      .then(data => {
        this.setState({starwarsResults: data.results})
      })
  }

  render() {
    let linkPath = '';
    if (this.state.selectedItem.url !== undefined ) {
      linkPath = this.state.selectedItem.url.replace('http://swapi.co/api/','');
    }
    return (
      <Router>
        <div>
          <Route exact path="/" render={(props) => (
            <StarwarsApp 
              {...props}
              searchValue={this.state.searchValue}
              radioValue={this.state.radioValue}
              starwarsResults={this.state.starwarsResults}
              selectedItem={this.state.selectedItem}
              handleChange={this.handleChange}
              handleClick={this.handleClick}
              fetchData={this.fetchData} />
          )} />
          <Route path={`/details/:${linkPath}`} render={(props) => (
            <StarwarsItem {...props} 
              type={this.state.radioValue}
              searchValue={this.state.searchValue}
              selectedItem={this.state.selectedItem} />
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
