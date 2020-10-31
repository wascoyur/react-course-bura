import React from 'react';
import TodoListItem from '../todo-list-item/'
import './todo-list.css'

const TodoList = ( {todos, toDeleted, onToggleDone, onToggleImportant} ) => {

  const elements = todos.map((item) => {
    return(
      <li key={item.id} className="list-group-item">
        <TodoListItem {...item}

        onDeleted = {()=> {
          toDeleted(item.id);
        }}
        onToggleImportant = {() => { onToggleImportant(item.id)}}
        onToggleDone = {() => { onToggleDone(item.id) }}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  )
}
export default TodoList;
