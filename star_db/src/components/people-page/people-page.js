import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list/'
import ItemDetails from '../item-details/';
import Row from "../row";
import Record from '../item-details/';

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
    const personDetails = (
      <ItemDetails
        getData = {this.props.getData.getPerson}
        itemId = {11}
      />
    );
    const starshipDetails = (
      <ItemDetails
        getData = {this.props.getData.getSpaceShip}
        itemId = {5}
        getImgUrl = {2}>
        <Record field = "name" label="name"/>
        <Record field ="model" label='model'/>
      </ItemDetails>
    ) ;
    
    return(
      <Row
        left={ personDetails }
        right={starshipDetails }
      />
    )
  }
}
