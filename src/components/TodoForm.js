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
        this.setState({
            input: ''
        })
    }

    handleAdd = () => {
        this.props.handleAddItem(this.state.input);
    }

    handleClear = () => {
        this.props.handleClearItem();
    }
    

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-add">
                    <input className="todo-input" value={this.state.input} onChange={this.handleChange} type="text" name="item" placeholder="todo..."></input>
                    <button className="addBtn" onClick={this.handleAdd}>Add</button>
                </div>
                <div>
                    <button className="clearBtn" onClick={this.handleClear}>Clear Completed</button>
                </div>
            </form>
        );
    }
}

export default TodoForm;