import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

const todo = [
  {
    task: 'Get car washed',
    id: 123,
    completed: false
  },
  {
    task: 'Get teeth cleaned',
    id: 234,
    completed: false
  },
  {
    task: 'Pick up dry cleaning',
    id: 345,
    completed: false
  },
  {
    task: 'Bake birthday cake',
    id: 456,
    completed: false
  },
];

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todo: todo
    }
  }

  handleToggleItem = (itemId) => {
    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
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
        id: Date.now(this.state.todo),
        completed: false
      }]
    })
  }

  handleClearItem = () => {
    this.setState({
      todo: this.state.todo.filter(item => (!item.completed))
    });
  };
  
  render() {
    return (
      <div>
        <div>
          <h1>Welcome to your Todo App!</h1>
          <TodoForm handleAddItem={this.handleAddItem} handleClearItem={this.handleClearItem}/>
        </div>
        <TodoList handleToggleItem={this.handleToggleItem} todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
