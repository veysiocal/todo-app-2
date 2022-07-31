import React, { useEffect, useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

import classes from './Todos.module.css';

export default function Todos() {
  const { todos, setTodos } = useTodoContext();

  const [showTodos, setShowTodos] = useState(todos);

  const [searchInput, setSearchInput] = useState();

  useEffect(() => {
    setShowTodos(todos)
  }, [todos])

  const showCompletedTodos = () => {
    setShowTodos(todos.filter(todo => todo.isDone === true))
  }

  const showNotCompletedTodos = () => {
    setShowTodos(todos.filter(todo => todo.isDone === false))
  }

  const showAllTodos = () => {
    setShowTodos(todos)
  }

  const searchHandler = e => {
    setSearchInput(e.target.value);

    if (searchInput !== undefined) {
      const ddd = todos.filter(todo => todo.text.includes(searchInput));
      setShowTodos(ddd)
    }
  };


  return (
    <>
      <div className={classes.filterSection}>
        <input placeholder="Todolarda ara..." value={searchInput} onChange={searchHandler} className={classes.filterInput}></input>
        <button onClick={showCompletedTodos} className={classes.filterButton}>Tamamlananları Göster</button>
        <button onClick={showNotCompletedTodos} className={classes.filterButton}>Tamamlanmayanları Göster</button>
        <button onClick={showAllTodos} className={classes.filterButton}>Bütün Todoları Göster</button>
      </div>
      <hr />
      <div className={classes.todosDiv}>
        <h1>Todolarım</h1>
        <ul className={classes.todoList}>
          {showTodos.length === 0 && <p>Hiç todo yok.</p>}
          {showTodos.length !== 0 && showTodos.map(todo => <TodoItem todo={todo.text} key={todo.id} id={todo.id} isDone={todo.isDone} update={todo.update} />)}
        </ul>
      </div>
    </>
  )
}