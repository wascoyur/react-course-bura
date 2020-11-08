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

        <PeoplePage/>
    </div>
  );
  }
};
