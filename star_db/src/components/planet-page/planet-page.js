import { Component } from 'react';
import './planet-page.css';
import ItemList from '../item-list'
import ItemDetails, { Record } from '../item-details/';
import Row from "../row";

export default class PlanetPage extends Component{
  state = {
    selectedItem:5
  }
  onPlanetSelected = (selectedItem)=>{
    this.setState({selectedItem});
  };
  
  render(){
    const itemDetails = (
      <ItemDetails
        getData = {this.props.getData.getPlanet}
        itemId = {this.state.selectedItem}
        getImgUrl ={1}>
        <Record field="name" label ="Имя"/>
        <Record field="diametr" label ="Диаметр"/>
        <Record field="population" label="Население"/>
      </ItemDetails>
    );
    const planetList = (
      <ItemList
        onItemSelected={ this.onPlanetSelected }
        getData = {this.props.getData.getAllPlanets}
        renderItem = { (item) => `${item.name}` }
      />
    )
  
    return(
      <Row
        left={ planetList }
        right={ itemDetails }
      />
    )
    
  }
}
