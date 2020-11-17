import React, {Component} from 'react';
import './error-indicator.css'

export default class ErrorIndicator extends Component{
  render() {
    return(
      <div className="container-sm error-indicator">
        <span className={"alert alert-danger"}>Error is red</span>
      </div>
      
      )
    
  }
}