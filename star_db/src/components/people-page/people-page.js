import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list/'
import ItemDetails, { Record } from '../item-details/';
import Row from "../row";

export default class PeoplePage extends Component{
  state = {
    selectedItem:1
  }
  onPersonSelected = (selectedItem)=>{
    this.setState({selectedItem});
  };
  
  render(){
    if (this.state.hasError) {
      // return <ErrorIndicator/>
    }
    const itemDetails = (
      <ItemDetails
        getData = {this.props.getData.getPerson}
        itemId = {this.state.selectedItem}
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
        right={itemDetails }
      />
    )
  }
}
