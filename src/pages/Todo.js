import React from "react";
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";
import TodoProvider from "../context/TodoContext";

export default function Todo() {
    return(
        <TodoProvider>
            <AddTodo />
            <Todos />
        </TodoProvider>
    )
};