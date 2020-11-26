import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  render(){
    const { label, onToggleDone, onToggleImportant, done, important } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done'
    }
    if (important) {
      classNames += ' important'
    }
    return(
      <span className={ classNames }>
        <span
          className="todo-list-item-label"
          onClick = { onToggleDone }
          >
          { label }
        </span>

        <button type="button"
                onClick = { onToggleImportant }
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
