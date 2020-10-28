import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header'
import TodoList from './components/todo-list'
import SearchPanel from './components/search-panel'
import './index.css';
import ItemStatusFilter from './components/item-status-filter';

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
ReactDOM.render(<App/>, document.getElementById('root'));
