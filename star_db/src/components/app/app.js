import React, {Component} from 'react';
import SwapiService from '../../services/swapi/swapi-servicw'
import Header from '../header';
import RandomPlanet from '../random-planet';
import PlanetPage from '../planet-page/'
import PeoplePage from '../people-page/'
import Row from '../row/'
import './app.css';
import {BrowserRouter as Router,Route} from "react-router-dom";

export default class App extends Component{
  state={
    swapi:new SwapiService()
  }
  render(){
    
    return (
        <div>
          <Router>
            <Header />
            <div className="row mb2">
              <div className="col-md-6">
                <RandomPlanet />
              </div>
            </div>
            <Route
              path="/people"
              children = { <PeoplePage  getData = {this.state.swapi}/>}/>
            <Route
              path="/planet"
              children= { <PlanetPage getData = { this.state.swapi }/>}/>
            
          </Router>
        </div>
      
    
    )
  }
};
