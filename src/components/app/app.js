import React, { Component} from 'react';
import SearchPanel from '../search-panel/';
import AppHeader from '../app-header/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import AddItem from '../add-item/index'

class App extends Component {
  state ={
    todoData:[
              { label:'Drink a beer', important:false, id:1},
              { label:'Develop React App', important: true , id:2},
              { label:'Be happy', important:false , id:3}
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
  addItem = (s) => {
    this.setState(({todoDoata}) => {
      let idx = this.state.todoData.length +1;
     const newArray = Array.from(this.state.todoData)
     newArray.push(
      {
        'label': s,
        'important':false,
        'id':idx
      })
    return { todoData: newArray }
    })



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
              />
              <AddItem onAddItem = { this.addItem }/>
              </div>
          </span>
        )
  }



}

export default App;
