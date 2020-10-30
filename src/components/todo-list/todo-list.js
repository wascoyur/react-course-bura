import React from 'react';
import TodoListItem from '../todo-list-item/'
import './todo-list.css'

const TodoList = ( {todos, toDeleted} ) => {

  const elements = todos.map((item) => {
    return(
      <li key={item.id} className="list-group-item">
        <TodoListItem {...item}
        onDeleted = {(id)=> { toDeleted(id)}}
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
