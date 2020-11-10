import React, {Component} from 'react';
import Spinner from '../spinner'
import './item-details.css';

export default class ItemDetails extends Component{

  state ={
    item:{
      itemId: null,
      name: null,
      gender: null,
      birdYear: null,
      eyeColor: null,
      img:null
    },
    loading: true,
  }
  componentDidMount(){
    this.updateItem();
  }
  componentDidUpdate(prevProps){
    if (prevProps !== this.props) {
      this.updateItem(this.state.item.itemId);
    }
  }
  updateItem(){
    this.setState({loading:true})
    const { getData, itemId} = this.props

    if(!itemId) {return}
    getData(itemId)
      .then((item) =>{
        this.setState({
          item,
          loading: false,
        })
      });

  }
  render(){
    const { loading, item, img } = this.state;
    const spinner = loading  ? <Spinner/>:null
    const content = !loading ? <PersonView person = {item}/> : null
    return(
      <div className="person-details card">
        {content}
        {spinner}
      </div>
    )
  }

}
const PersonView =({person}) =>{
  const {  name, gender, birdYear, eyeColor, img } = person;
  return(
    <React.Fragment>
        <img className="person-image" src={img} alt=""></img>
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
