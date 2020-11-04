import React, { Component } from 'react';
import SwapiService from '../../services/swapi/swapi-servicw'
import './random-planet.css'

export default class RandomPlanet extends Component{
  swapiService = new SwapiService();
  state = {
    id: 0,
    name: 'none',
    population:0,
    rotationPeriod:0,
    diametr:0
  }
  constructor(){
    super();
    this.updatePlanet();
  }

  updatePlanet(){
    const rnd = Math.floor(Math.random() * 25 +2);
    const id = rnd;
    this.swapiService
      .getPlanet(id)
      .then((planet) =>{
        this.setState(planet)
      })

  }
  render() {
    const {id, name, population, rotationPeriod, diametr } = this.state
    return(
      <div className="person-details card">
        <img className="person-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod} days</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diametr</span>
              <span>{diametr} km</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }

}
