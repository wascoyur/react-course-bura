import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './item-list.css'

export default class ItemList extends Component {

  render(){
    return (
    <ul className="item-list list-group">
      <li className="list-group-item">Luke Sky</li>
      <li className="list-group-item">Luke Sky</li>
      <li className="list-group-item">Luke Sky</li>
    </ul>
    )

  }
}
