import React, { Component } from 'react';
import SwapiService from '../../services/swapi/swapi-servicw'
import './random-planet.css'
import Spinner from '../spinner/'

export default class RandomPlanet extends Component{
  swapiService = new SwapiService();
  state = {
    planet:{
      id: 0,
      name: 'none',
      population:0,
      rotationPeriod:0,
      diametr:0
    },
    loading: true,
    error:false
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  componentDidMount(){
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 25000);
  }
  updatePlanet = () => {
    const rnd = Math.floor(Math.random() * 19 +2);
    const id = rnd;
    this.swapiService
      .getPlanet(id)
      .then((planet) =>{
        this.setState({planet, loading:false});
      })
  }
  render() {
    const {planet, loading } = this.state;
    const spinner = loading?<Spinner/> : null;
    const content = !loading ? <PlanetView planet ={planet}/> : null;

    return(
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    )
  }

}
const PlanetView = ({planet}) =>{
  const { id, name, population, rotationPeriod, diametr } = planet;
  return(
    <React.Fragment>
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
    </React.Fragment>
  )
}
