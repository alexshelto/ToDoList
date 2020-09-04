//Alexander Shelton






import React from 'react';
import ListItems from './listItems';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './todo-list.css';

library.add(faTrash)



class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.addToDo = this.addToDo.bind(this);
    this.onToDoChange = this.onToDoChange.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.deleteItem = this.deleteItem.bind(this);



    //todo state
    this.state = {
      items: [],
      currentItem: {
        ToDo: '',
        key: ''
      }
    }
  }

  //Adds to the todo list.
  //Checks to make sure entry is valid.
  //Creates new list of todo entries and adds it to state
  addToDo(e) {
    e.preventDefault();
    const entry = this.state.currentItem;
    if (entry !== '') {
      const items = [...this.state.items, entry];
      this.setState({
        items: items,
        currentItem: {
          ToDo: '',
          key: ''
        }
      });
    }
  }


  //Updating todo entry field
  onToDoChange(e) {
    this.setState({
      currentItem: {
        ToDo: e.target.value,
        key: Date.now()
      }
    });
  }

  deleteItem(key) {
    //return array without key and update state
    const filtered = this.state.items.filter(item => item.key !== key);
    this.setState({ items: filtered });
  }


  //Find the todo with the key. change its value. update items in todo
  setUpdate(new_todo, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.ToDo = new_todo;
      }
    });
    this.setState({ items: items });
  }



  render() {
    return (
      <div className="ToDoList">
        <header>
          <form id="to-do-form" onSubmit={this.addToDo}>
            <input type="text" placeholder="enter to do item" value={this.state.currentItem.ToDo} onChange={this.onToDoChange} />
            <button type='submit'>Add</button>
          </form>
          <p> {this.state.items.ToDo} </p>

          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />


        </header>
      </div>
    );
  }
}



export default TodoList;
