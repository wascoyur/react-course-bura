import { Component } from 'react';
import './planet-page.css';
import ItemList from '../item-list'

export default class PlanetPage extends Component{
  
  render(){
    return(
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={ this.onPersonSelected }/>
        </div>
        <div className="col-md-6">
          {/* <PersonDetails personId = {this.state.selectedPerson}/> */}
        </div>
      </div>
    )
  }
}
