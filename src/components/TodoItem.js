import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

import classes from './TodoItem.module.css';

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
                todo.update = !todo.update
            }
            return todo
        })
        setTodos(updatedTodos)
    };

    const cancelUpdateProgress = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.update = false
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const updateTodoHandler = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.text = updatedTodo
                todo.update = false
            }
            return todo
        })
        setTodos(updatedTodos)

    }
    return (
            <li className={classes.todoItem}>
                {update === false ? (
                    <span> {todo} </span>
                ) : (
                    <form className={classes.updateTodoForm}>
                        <input defaultValue={todo} onChange={e => setUpdatedTodo(e.target.value)} className={classes.updateTodoInput} />
                        <button onClick={() => updateTodoHandler(id)} className={classes.updateTodoButton} >Güncelle</button>
                        <button onClick={() => cancelUpdateProgress(id)} className={classes.updateTodoButton}>İptal Et</button>
                    </form>)}
                <div className={classes.todoItemButtons}>
                    <section className={classes.completeTodo}>
                    <input type='checkbox'id={id} checked={isDone} onClick={() => todoDoneHandler(id)}  />
                    <label for={id}>
                        {isDone ? 'Tamamlanmadı olarak işaratle' : 'Tamamlandı olarak işaratle'}
                    </label>
                    </section>

                    <button onClick={() => deleteTodoHandler(id)} className={classes.todoItemButton}>Sil</button>
                    <button onClick={() => updateHandler(id)} className={classes.todoItemButton}>Düzenle</button>
                </div>
            </li>
    )
};
