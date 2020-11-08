import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PlanetPage from '../planet-page'
import PeoplePage from '../people-page/'
import StarshipPage from '../starship-page/'
import './app.css';

export default class App extends Component{

  
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
      <PlanetPage/>
      <StarshipPage/>
    </div>
  );
  }
};
