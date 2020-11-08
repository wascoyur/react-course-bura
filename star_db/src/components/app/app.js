import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PeoplePage from '../people-page/'

import './app.css';

export default class App extends Component{
  state = {
    selectedPerson:1
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  }
  render(){
    return (
    <div>
      <Header />
      <div className="row mb2">
        <div className="col-md-6">
          <RandomPlanet />
        </div>
      </div>
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={ this.onPersonSelected }/>
        </div>
        <div className="col-md-6">
          <PersonDetails personId = {this.state.selectedPerson}/>
        </div>
      </div>
      <div className="row mb2">
        <div className="col-md-6">
        <PeoplePage/>
        </div>
        <div className="col-md-6">
        </div>
      </div>
    </div>
  );
  }
};
