import React, {Component} from 'react';
import Spinner from '../spinner'
import './planet-details.css';

export default class PersonDetails extends Component{

  state ={
    planet:{
      name: "Coruscant",
      rotation_period: "24",
      orbital_period: "368",
      diameter: "12240",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "cityscape, mountains",
      surface_water: "unknown",
      population: "1000000000000",
      created: "2014-12-10T11:54:13.921000Z",
      edited: "2014-12-20T20:58:18.432000Z",
      url: "http://swapi.dev/api/planets/9/"
    },
    loading: true,
  }
  componentDidMount(){
    // this.updatePerson();
  }
  componentDidUpdate(prevProps){
    if (prevProps !== this.props) {
      this.updatePerson(this.state.person.personId);
    }
  }
  updatePlanet(){
    this.setState({loading:true})
    const { getData, personId} = this.props

    if(!personId) {return}
    getData(personId)
      .then((person) =>{
        this.setState({
          person:person,
          loading: false
        })
      });

  }
  render(){
    const { loading, person} = this.state;
    const spinner = loading  ? <Spinner/>:null
    const content = !loading ? <PersonView person = {person}/> : null
    return(
      <div className="person-details card">
        {content}
        {spinner}
      </div>
    )
  }

}
const PersonView =({person}) =>{
  const { id, name, gender, birdYear, eyeColor } = person
  return(
    <React.Fragment>
        <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""></img>
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
    </React.Fragment>
  )
}
