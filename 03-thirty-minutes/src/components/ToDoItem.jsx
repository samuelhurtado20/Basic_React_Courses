import React from 'react'

export function ToDoItem({ todo, toggleTodo }) {
    const {id, task, completed} = todo;

    const handleTodoClick = () =>{
        toggleTodo(id);
    }

    return (
        <li id={id}>
            <input type="checkbox" checked={completed} onChange={handleTodoClick} />
            {task}
        </li>
    )
}
