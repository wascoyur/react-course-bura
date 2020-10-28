 import React from 'react';
 import './app-header.css'
 const AppHeader = ({toDo=3, done=2}) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{toDo} осталось сделать, {done} выполнено</h2>
    </div>
  );
};
export default AppHeader;
