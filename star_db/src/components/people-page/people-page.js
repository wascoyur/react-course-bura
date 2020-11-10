import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list/'
import ItemDetails from '../item-details/';
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
      <ItemDetails getData = {this.props.getData.getPerson} personId = {11}/>
    );
    const starshipDetails = (
      <ItemDetails getData = {this.props.getData.getSpaceShip} personId = {5}/>
    ) ;
    
    // const left = (  <ItemList
    //     onItemSelected={ this.onPersonSelected }
    //     getData = {this.props.getData.getAllPeople}
    //     renderItem = { (item) => `${item.name} ${item.gender} ${item.birdYear}` }
    //   />
    // );
    // const right = (
    //   <ItemDetails personId = {this.state.selectedPerson}
    //                getData = {this.props.getData.getPerson}
    // />);
    return(
      <Row
        left={ personDetails }
        right={starshipDetails }
      />
    )
  }
}
