import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list/'
import ItemDetails, { Record } from '../item-details/';
import Row from "../row";

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
        itemId = {1}
        getImgUrl ={1}>
        <Record field="name" label ="Имя"/>
        <Record field="hair_color" label="Цвет волос"/>
      </ItemDetails>
    );
    const personList = (
      <ItemList
        onItemSelected={ this.onPersonSelected }
        getData = {this.props.getData.getAllPeople}
        renderItem = { (item) => `${item.name}` }
      />
    )
    
    return(
      <Row
        left={ personList }
        right={personDetails }
      />
    )
  }
}
