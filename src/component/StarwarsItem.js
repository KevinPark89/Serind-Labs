import React, { Component } from 'react';

class StarwarsItem extends Component {
    render() {
       let properties = Object.keys(this.props.selectedItem).map((key, i) => {
           return (
            <li className="itemList" key={i}>{key}: {this.props.selectedItem[key]}</li>
        )
       })
       return (
        <div>
            <ul>{properties}</ul>
        </div>
      );
    }    
}

export default StarwarsItem;