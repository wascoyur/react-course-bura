import React, { Component} from 'react';
import SearchPanel from '../search-panel/';
import AppHeader from '../app-header/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import AddItem from '../add-item/index'

export default class App extends Component {
  state ={
    todoData:[
      {label:'Drink a beer', important:false, id:1, done: false},
      {label:'Develop React App', important:false, id:2, done: false},
      {label:'Be happy', important:false, id:3, done: false}
    ],
    term: '',
    filter: 'all'
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
  onSearchChange = (term) =>{
    this.setState({term})
  }
  search(items, term ){
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1});
  }
  filter(items, filter){
    switch (filter) {
      case 'done':
        return items.filter((el) =>{
          return el.done === true
        })
      case 'active':
        return items.filter((el) =>{
          return el.done === false
        })
      default:
        return items
    }
  }
  filterChange = (filter)=>{
    this.setState({
       filter: filter
    })
  }

  render(){
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((el) => {
      return el.done
    }).length
    const open = todoData.length - doneCount;
    return (
          <span>
            <div>
              <AppHeader toDo={open} done={doneCount}/>
              <div className="top-panel d-flex">
                <SearchPanel
                  onSearchChange = { this.onSearchChange }
                />
                <ItemStatusFilter
                   filter = {filter}
                   onChangeFilter = {this.filterChange}
                />
              </div>
              <TodoList
                todos = { visibleItems }
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
