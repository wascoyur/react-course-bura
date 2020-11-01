import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component{
  state={
    term: ''
  }
  onSearchChange = (e) =>{
    let term = e.target.value.toLowerCase() ;
    this.setState({ term });
    this.props.onSearchChange(term)
  }


  render(){
    return (
      <form
        className="item-add-form d-flex"
        >
        <input type="text"
          className="form-control search-input"
          placeholder="type to search"
          onChange = { this.onSearchChange }
          value = { this.state.onSearchChange }
        ></input>
      </form>

    )
  }
}
