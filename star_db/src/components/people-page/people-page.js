import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list/'
import PersonDetails from '../person-details/'
import SwapiService from '../../services/swapi/swapi-servicw'

export default class PeoplePage extends Component{
  // swapi = new SwapiService();
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
        <div className="col-md-6">
          <ItemList
            onItemSelected={ this.onPersonSelected }
            getData = {this.props.getData.getAllPeople}
            renderItem = { (item) => `${item.name} ${item.gender} ${item.birdYear}` }
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId = {this.state.selectedPerson}
            getData = {this.props.getData.getPerson}
          />
        </div>
      </div>
    )
  }
}
