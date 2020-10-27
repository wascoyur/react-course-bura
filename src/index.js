import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header'
import TodoList from './components/todo-list'

const SearchPanel = () => {
  const textToSearch = 'Type here';
  const searchStyle = {fontSize: '25px'}
  return (

    <input
    style = {searchStyle}
    placeholder = { textToSearch } />
  )
}
const App = () => {
  return (
        <div>
          <AppHeader/>
          <SearchPanel/>
          <TodoList/>
        </div>
)
};
ReactDOM.render(<App/>, document.getElementById('root'));
