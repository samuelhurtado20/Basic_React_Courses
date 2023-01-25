import React from 'react'
import { ToDoItem } from './ToDoItem'

export default function ToDoList({ todos, toggleTodo }) {
  return (
    <ul>
        {
            todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))
        }
    </ul>
  )
}
