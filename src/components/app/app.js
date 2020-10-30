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
          <AppHeader toDo={3} done={2}/>
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
          <TodoList
          todos = { todoData }
          let toDeleted = {
            (id) =>{ console.log(id) }
          }
          />
        </div>
)
};

export default App;
