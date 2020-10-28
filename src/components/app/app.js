import React from 'react';
import SearchPanel from '../search-panel/';
import AppHeader from '../app-header/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';

const App = () => {
  const todoData = [
    { label:'Drink a beer', important:false, id:1},
    { label:'Develop React App', important: true , id:2},
    { label:'Be happy', important:false , id:3}
  ]
  return (
        <div>
          <AppHeader/>
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
          <TodoList todos = { todoData } />
        </div>
)
};

export default App;
