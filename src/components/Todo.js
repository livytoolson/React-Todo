import React from 'react';
import './Todo';

const Todo = props => {
    const handleClick = () => {
        props.handleToggleItem(props.item.id);
    }

    return (
        <div className="todo-list">
            <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
                <p className="list-item">{props.item.task}</p>
            </div>
        </div>
    );
};

export default Todo;