import React, {Component} from 'react'
import './error-boudary.css'
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends Component{
  componentDidCatch(){
  
  }
  render(){
    return(
        <div>
          <ErrorIndicator/>
        </div>
      )
    
  }
}