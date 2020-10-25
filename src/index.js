import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  const list = ['Learn React', 'Build Awesome App']
  return (
    <ul>
      <li>{list[1]}</li>
      <li>{list[0]}</li>
    </ul>
  )
}
const AppHeader = () => {
  return(
    <h1>My Todo List</h1>
  )
}
const SearchPanel = () => {
  return (
    <input placeholder = "search" />
  )
}
const App = () => {
  const login = <span>Login, please</span>
  return (
        <div>
          <span>{ (new Date()).toString() }</span>
          { login }
          <AppHeader/>
          <SearchPanel/>
          <TodoList/>
        </div>
)
};
ReactDOM.render(<App/>, document.getElementById('root'));
