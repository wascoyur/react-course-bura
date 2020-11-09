import { Component } from 'react';
import './planet-page.css';
import ItemList from '../item-list'
import PlanetDetails from '../planet-details/'

export default class PlanetPage extends Component{
  state = {
    selectedPlanet:{}
  }
  render(){
    return(
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={ this.onPersonSelected }
            getData = {this.props.getData.getAllPlanets}
            renderItem = {(item) =>
              (<span>{item.name} {item.diametr} km</span>)}
          />
        </div>
        <div className="col-md-6">
          <PlanetDetails personId = {this.state.selectedPlanet}
            getData = {this.props.getData.getPlanet}
          />
        </div>
      </div>
    )
  }
}
