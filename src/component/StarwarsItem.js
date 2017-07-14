import React, { Component } from 'react';

class StarwarsItem extends Component {
    render() {
       let properties = [];
       for(let key in this.props.selectedItem) {
                  properties.push(
            <li key={this.props.selectedItem.url+this.props.selectedItem.name}>
              {this.props.selectedItem[key]}
          </li>
         );
             }
       return (
        <div>
            <ul>{properties}</ul>
        </div>
      );
    }    
}

export default StarwarsItem;