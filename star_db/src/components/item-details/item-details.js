import React, {Component} from 'react';
import Spinner from '../spinner'
import './item-details.css';

const  Record = ({item, field, label}) =>{
  return(
    <li className="list-group-item">
      <span className="term">{ label}</span>
      <span>{ item[field] }</span>
    </li>
  )
}
export { Record }

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
    const { loading, item } = this.state;
    return(
      <div className="person-details card">
        <img className="person-image" src={item.img} alt=""></img>
        <div className="card-body">
          <h4>{item.birdYear}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) =>{
                return React.cloneElement(child, {item});
              })
            }
          </ul>
        </div>

      </div>
    )
  }

}

