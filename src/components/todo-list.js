import React from 'react';
import TodoListItem from './todo-list-item';
const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem label='Drink alcool'
        important
      /></li>
      <li><TodoListItem label = 'Develop ReactApp'/></li>
    </ul>
  )
}
export default TodoList;
