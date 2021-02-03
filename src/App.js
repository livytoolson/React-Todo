import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

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
  state = {
    value: '',
    todo: []
  };
    // state = {
    //   todo: todo
    // }

  handleToggleItem = (itemId) => {
    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        };
      })
    });
  };

  handleAddItem = (task) => {
    this.setState({
      todo: [...this.state.todo, {
        task: task,
        id: Date.now(this.state.todo),
        completed: false
      }]
    });
  };

  handleClearItem = () => {
    this.setState({
      todo: this.state.todo.filter(item => (!item.completed))
    });
  };

  // numTodos = this.state.todo.length
  
  render() {
    return (
      <div>
        <header className="title">Todo List</header>
        {/* <div className="alert">You have {this.numTodos} tasks on your todo list today!</div> */}
        <div className="app-wrapper">
          <div className="todo-form">
            <TodoForm handleAddItem={this.handleAddItem} handleClearItem={this.handleClearItem}/>
          </div>
          <div className="todo-list">
            <TodoList handleToggleItem={this.handleToggleItem} todo={this.state.todo}/>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
