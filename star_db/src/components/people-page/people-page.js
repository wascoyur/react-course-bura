import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list/'
import PersonDetails from '../person-details/';
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
    const left = (  <ItemList
        onItemSelected={ this.onPersonSelected }
        getData = {this.props.getData.getAllPeople}
        renderItem = { (item) => `${item.name} ${item.gender} ${item.birdYear}` }
      />
    );
    const right = (
      <PersonDetails personId = {this.state.selectedPerson}
                                 getData = {this.props.getData.getPerson}
    />);
    return(
      <Row
        left={left}
        right={right}
      />
    )
  }
}
