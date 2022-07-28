import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

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
        <form onSubmit={addTodoSubmitHandler}>
            <input placeholder="Todo Ekle" onChange={addTodoHandler} value={todo}></input>
            <button type="submit" >Ekle</button>
        </form>
    )
};

export default AddTodo;