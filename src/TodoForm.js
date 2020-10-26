import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.input);
    }

    // handleAdd = () => {
    //     this.props.handleAddItem(this.state.input);
    // }

    handleClear = () => {
        this.props.handleClearItem();
    }
    

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChange} type="text" name="item" placeholder="todo..."></input>
                <button>Add Todo</button>
                <button onClick={this.handleClear}>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;