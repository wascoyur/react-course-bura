import React, { Component} from 'react';
import SearchPanel from '../search-panel/';
import AppHeader from '../app-header/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import AddItem from '../add-item/index'

export default class App extends Component {
  state ={
    todoData:[
              // this.createTodoItem('Drink a beer'),
              // this.createTodoItem('Develop React App'),
              // this.createTodoItem('Be happy'),
            ]
  }
  deleteItem = (id) =>{
    this.setState(({ todoData }) =>{
      const newArray = Array.from(todoData)
      const idx = newArray.findIndex( (el) => { return el.id === id });
      newArray.splice(idx, 1);
      return {
        todoData: newArray
      }
    })
  }
  addItem = (nameItem = 'null') => {
    this.setState(() => {
      const newArray = Array.from(this.state.todoData);
      newArray.push( this.createTodoItem(nameItem));
      return { todoData: newArray }
    })
  }
  onToggleImportant = (id) => {
    this.setState(() => {
      const newArray = [...this.state.todoData];
      const idx = newArray.findIndex( (el) => { return el.id === id });
      newArray[idx].important = !newArray[idx].important
      return { todoData: newArray }
    })
  }
  onToggleDone = (id) => {
    this.setState(() => {
      const newArray = [...this.state.todoData];
      const idx = newArray.findIndex( (el) => { return el.id === id });
      newArray[idx].done = !newArray[idx].done
      return { todoData: newArray }
    })
  }
  createTodoItem (label, id=0){
    try {
      let newArr = [...this.state.todoData];
      id = 1+newArr.length++ }
     catch(e){
      id = 1
    }

    return {
            'label': label,
            'important':false,
            'id':id,
            'done': false
          }
  }

  createTestData(){
    this.createTodoItem('Drink a beer');
    this.createTodoItem('Develop React App');
    this.createTodoItem('Be happy');

  }

  render(){
    return (
          <span>
            <div>
              <AppHeader toDo={3} done={2}/>
              <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
              </div>
              <TodoList
              todos = { this.state.todoData }
              let toDeleted = {
                (id) =>{ this.deleteItem(id) }
              }
              onToggleImportant = { this.onToggleImportant }
              onToggleDone = { this.onToggleDone }
              />
              <AddItem onAddItem = { this.addItem }/>
              </div>
          </span>
        )
  }

}
