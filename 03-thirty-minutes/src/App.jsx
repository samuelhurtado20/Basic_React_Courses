import React, { Fragment, useState, useRef, useEffect, } from "react";
import ToDoList from "./components/ToDoList";
import { v4 as uuidv4 } from 'uuid'

const KEY = 'todosApp';

export function App() {

    const [todos, setTodos] = useState([]);
    const todoTaskRef = useRef();

    const toggleTodo = (id) => {
        const newTodos = [...todos]
        const todo = newTodos.find((todo) => todo.id === id)
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return;
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), task, completed: false }]
        })
        todoTaskRef.current.value = ''
    }

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed)
        setTodos(newTodos);
    }

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem(KEY));
        if (saved) setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

    return (
        <Fragment>
            <ToDoList todos={todos} toggleTodo={toggleTodo} />
            <input ref={todoTaskRef} type="text" placeholder="New task" />
            <button onClick={handleTodoAdd}>Add</button>
            <button onClick={handleClearAll}>Del</button>
            <br />
            <div>
                Te quedan {todos.filter((todo) => !todo.completed).length}
            </div>
        </ Fragment>
    )
}