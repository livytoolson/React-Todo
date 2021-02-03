import React from 'react';

class TodoForm extends React.Component {
        state = {
            input: ''
        };

    handleChange = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            input: ''
        });
    };

    handleAdd = () => {
        this.props.handleAddItem(this.state.input);
    };

    handleClear = () => {
        this.props.handleClearItem();
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                    <input 
                        className="todo-input" 
                        value={this.state.input} 
                        onChange={this.handleChange} 
                        type="text" 
                        name="item" 
                        placeholder="Todo..." 
                    />
                    <button 
                        className="addBtn" 
                        onClick={this.handleAdd}>
                        Add
                    </button>
                    <button 
                        className="clearBtn" 
                        onClick={this.handleClear}>
                        Clear Completed
                    </button>
            </form>
        );
    };
};

export default TodoForm;