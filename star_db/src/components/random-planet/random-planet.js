import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './random-planet.css'

export default class RandomPlanet extends Component{

  render() {
    return(
      <div className="person-details card">
        <img className="person-image" src="https://starwars-visualguide.com/assets/img/planets/9.jpg"/>
        <div className="card-body">
          <h4>Planet Name</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>123</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>20</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diametr</span>
              <span>2</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }

}
