import React, { Component } from 'react';
import './add-item.css';

export default class AddItem extends Component {
  onLabelChange = (e) =>{
    this.setState({
      label: e.target.value
    });
   }
   onSubmit = (e)=>{
     e.preventDefault();
     this.props.onAddItem(this.state.label);
   }
  render(){
    return(
        <form className="item-add-form d-flex"
          onSubmit = { this.onSubmit }
          >
          <input type = "text"
            className = "form-control"
            onChange ={this.onLabelChange}
            placeholder = "Что должно быть сделано?"
            >
          </input>
          <button type="submit"
              className="btn btn-outline-secondary"
              // onClick = { () => this.props.onAddItem() }
            >Add Item
          </button>
        </form>
    )
  }
}
