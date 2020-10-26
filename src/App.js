import React from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

const todo = [
  {
    task: 'Get car washed',
    id: 1,
    completed: false
  },
  {
    task: 'Get teeth cleaned',
    id: 2,
    completed: false
  },
  {
    task: 'Pick up dry cleaning',
    id: 3,
    completed: false
  },
  {
    task: 'Bake birthday cake',
    id: 4,
    completed: false
  },
]

class App extends React.Component {
  constructor (){
    super();
    this.state = {
      todo: todo
    }
  }

  handleToggleItem = (itemId)=>{
    this.setState({
      todo: this.state.todo.map(item=>{
        if(item.id === itemId) {
          return {
            ...item,
            purchased: !item.purchased
          }
        } else {
          return item;
        }
      })
    })
  }

  handleAddItem = (task) => {
    this.setState({
      todo: [...this.state.todo, {
        task: task,
        id: this.state.todo.date.now(),
        completed: false
      }]
    })
  }

  handleClearItem = () => {
    this.setState({
      todo: this.state.todo.filter(item => (!item.completed))
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddItem={this.handleAddItem} handleClearItem={this.handleClearItem}/>
        <TodoList handleToggleItem={this.handleToggleItem} todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
