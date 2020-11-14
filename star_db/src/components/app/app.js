import React, {Component} from 'react';
import SwapiService from '../../services/swapi/swapi-servicw'
import Header from '../header';
import RandomPlanet from '../random-planet';
import PlanetPage from '../planet-page/'
import PeoplePage from '../people-page/'
import Row from '../row/'
import './app.css';

export default class App extends Component{
  swapi = new SwapiService();

  render(){
    return (
    <div>
      <Header />
      {/*<div className="row mb2">*/}
      {/*  <div className="col-md-6">*/}
      {/*    <RandomPlanet />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <PeoplePage
        getData = {this.swapi}
      />
      <PlanetPage
        getData = {this.swapi}
      />
    </div>
  );
  }
};
