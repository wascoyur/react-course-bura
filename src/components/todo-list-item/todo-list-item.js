import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  state = {
    done:  false,
    important: false
  }

  onLabelClick(){
      this.setState(({done}) =>{
        return {
          done:!done
        }
    })
  }

  onMarkImportant(){
    this.setState(({important}) => {
      return {important: !important}
    })
  }
  render(){
    const { label } = this.props;

    let classNames = 'todo-list-item';
    if (this.state.done) {
      classNames += ' done'
    }
    if (this.state.important) {
      classNames += ' important'
    }
    return(
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={ () => {
            this.onLabelClick();
          }}
          >
          { label }
        </span>

        <button type="button"
                onClick = {() =>  this.onMarkImportant()}
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"

                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o"
          onClick = { this.props.onDeleted }
          />
        </button>
        </span>
  )
  }
}
