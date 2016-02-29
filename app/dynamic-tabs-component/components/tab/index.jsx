//@TODO
import React from 'react';

export default class Tab extends React.Component {
  render() {
    return (
        <li id={this.props.item.id}>
            <a>
                <i className={this.props.item.icon}/>
                <span style={{marginRight: 15,marginLeft: 5}}>{this.props.item.text}</span>
            </a>
        </li>
    );
  }
}