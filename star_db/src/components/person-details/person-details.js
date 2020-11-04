import React, {Component} from 'react';
import SwapiService from '../../services/swapi/swapi-servicw'

import './person-details.css';

export default class PersonDetails extends Component{
  swapiService = new SwapiService();
  constructor(){
    super();
    this.updatePerson();
  }
  state ={
    id: 'id',
    name: 'person.name',
    gender: 'person.gender',
    birdYear: 'person.birth_year',
    eyeColor: 'person.eye_color'
  }
  updatePerson(){
    const rnd = Math.floor(Math.random() * 19 +2);
    const id = rnd;
    this.swapiService
      .getPerson(id)
      .then(person =>{
        this.setState(person)
      })
  }
  render(){
    const { id, name, gender, birdYear, eyeColor } = this.state;
    return(
      <div className="person-details card">
        <img className="person-image" src={`https://starwars-visualguide.com/assets/img//species/${id}.jpg`} alt=""></img>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">BirdYear</span>
              <span>{birdYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye color</span>
              <span>{eyeColor}</span>
            </li>

          </ul>
        </div>

        PersoDetails</div>
    )
  }

}
