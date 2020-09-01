import React from 'react';

//import ListItems from './list-items';
//


class TodoList extends React.Component {
  constructor(props){
    super(props);
  
    this.addToDo = this.addToDo.bind(this);
    this.onToDoChange = this.onToDoChange.bind(this);


     
    //todo state
    this.state = {
      items: [],
      currentItem: {
        ToDo: '',
        key:''
      }
    }  
  }

//Adds to the todo list.
//Checks to make sure entry is valid.
//Creates new list of todo entries and adds it to state
  addToDo(e){
    e.preventDefault();
    const entry = this.state.currentItem;
    if (entry !== '') {
      const items = [...this.state.items, items];
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
  onToDoChange(e){
    this.setState({
      currentItem: {
        ToDo: e.target.value,
        key: Date.now()
      }
    });
  }



  render(){
    return(
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addToDo}>
            <input type="text" placeholder="enter to do item" value={this.state.currentItem.ToDo} onChange={this.onToDoChange}/>
              <button type='submit'>Add</button>
          </form>
        <p> will show lists here </p>
        </header>
      </div>
    );
  }
}



export default TodoList;
