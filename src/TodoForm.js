import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }

    render(){
        return (
            <form>
                <input></input>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;