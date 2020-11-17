import React, {Component} from 'react'
import Spinner from "../spinner";
import ErrorBoundary from "../error-boundry";
export default class App extends Component{
  render(){
    return(
      <ErrorBoundary>
        <div className="container-sm">
          <h3>App</h3>
          <Spinner/>
        </div>
      </ErrorBoundary>
      
      
    )
  }
}