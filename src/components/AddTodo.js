import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import classes from './AddTodo.module.css';

const AddTodo = () => {

    const [todo, setTodo] = useState();

    const {todos, setTodos} = useTodoContext();
    
    const addTodoHandler = e => {
        setTodo(e.target.value);
    };

    const addTodoSubmitHandler = e => {
        e.preventDefault();
        setTodos(todos => [...todos, {text: todo, id: todos.length, isDone: false, update: false} ])
        setTodo("")
    };

    return (
        <form onSubmit={addTodoSubmitHandler} className={classes.form}>
            <input placeholder="Todo Ekle" onChange={addTodoHandler} value={todo} className={classes.todo_input}></input>
            <button type="submit" >Ekle</button>
        </form>
    )
};

export default AddTodo;