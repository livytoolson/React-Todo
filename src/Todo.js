import React from 'react';

const Todo = (props) => {
    const handleClick = () => {
        props.handleToggleTodo(props.item.id);
    }
    return (
        <div onClick={handleClick}>
            <p>{props.item.todo}</p>
        </div>
    )
}

export default Todo;