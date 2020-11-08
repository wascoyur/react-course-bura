import React, { Component } from 'react';
import './people-page.css';

export default class PeoplePage extends Component{

  state = {
    selectedPerson:{}
  }
  onPersonSelected = (selectedPerson)=>{
    this.setState({selectedPerson});
  };
  render(){
    if (this.state.hasError) {
      // return <ErrorIndicator/>
    }
    return(
      <div className="row mb2">
      <ul className="item-list list-group">
       
      </ul>
      </div>
    )
  }
}
