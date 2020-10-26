import React from 'react';
import './Todo';

const Todo = props => {
    const handleClick = () => {
        props.handleToggleItem(props.item.id);
    }

    return (
        <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
            <p>{props.item.task}</p>
        </div>
    );
};

export default Todo;