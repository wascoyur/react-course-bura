import React, {Component} from 'react';
import SwapiService from '../../services/swapi/swapi-servicw'
import Spinner from '../spinner'
import './person-details.css';

export default class PersonDetails extends Component{
  swapiService = new SwapiService();
  constructor(props){
    super(props);
  }
  state ={
    person:{
      personId: null,
      name: null,
      gender: null,
      birdYear: null,
      eyeColor: null
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
  updatePerson(){
    this.setState({loading:true})
    const { personId } = this.props;
    if(!personId) {return}
    this.swapiService
      .getPerson(personId)
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
