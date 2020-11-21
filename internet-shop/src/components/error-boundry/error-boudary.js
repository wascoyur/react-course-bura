import React, {Component} from 'react'
import './error-boudary.css'
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends Component{
  state={
    hasError:false
  }
  componentDidCatch(){
    this.setState({
      hasError:true
    })
  }
  render(){
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }
    let out;
    try{
       out = this.props.children
    }catch (e) {
      console.log(`this.props.children: ${this.props.children}, e: ${e}`)
    }
    return out
  }
}