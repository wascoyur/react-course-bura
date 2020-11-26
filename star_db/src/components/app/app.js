import React, {Component} from 'react';
import SwapiService from '../../services/swapi/swapi-servicw'
import Header from '../header';
import RandomPlanet from '../random-planet';
import PlanetPage from '../planet-page/'
import PeoplePage from '../people-page/'
import StarshipPage from "../starship-page";
import Row from '../row/'
import './app.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import ItemDetails, {Record} from "../item-details";
import ItemList from "../item-list";


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
              
              path="/"
              render = {() =>{return <h1>Welcome to StarDB</h1>}}
              exact
            />
            <Route
              path="/people"
              children = { <PeoplePage  getData = {this.state.swapi}/>}/>
            <Route
              exact
              path="/planet"
              children= { <PlanetPage getData = { this.state.swapi }/>}/>
            <Route
              path = "/starships/:id"
              
              component = {ItemList}
            />
          </Router>
        </div>
      
    
    )
  }
};
