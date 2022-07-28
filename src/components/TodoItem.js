import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

export default function TodoItem({ todo, id, isDone, update }) {

    const { todos, setTodos } = useTodoContext();
    const [updatedTodo, setUpdatedTodo] = useState();
    const deleteTodoHandler = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const todoDoneHandler = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone
            }
            return todo;
        }
        )
        setTodos(updatedTodos)
    }

    const updateHandler = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.update = true
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const updateTodoHandler = id => {
        const updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.text = updatedTodo
                todo.update = false
            }
            return todo
        })
        setTodos(updatedTodos)

    }
    return (
        <li>
            {update === false ? <span> {todo} </span> : (<form><input defaultValue={todo} onChange={e => setUpdatedTodo(e.target.value)}/> <button onClick={() => updateTodoHandler(id)}>Güncelle</button></form>)}
            <button onClick={() => deleteTodoHandler(id)}>Sil</button>
            <button onClick={() => updateHandler(id)}>Düzenle</button>
            <button onClick={() => todoDoneHandler(id)}> {isDone ? 'Tamamlanmadı olarak işaratle' : 'Tamamlandı olarak işaratle'} </button>
        </li>
    )
};
