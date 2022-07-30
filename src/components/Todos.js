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
      <div className={classes.main_div}>
        <button onClick={showCompletedTodos}>Tamamlananları Göster</button>
        <button onClick={showNotCompletedTodos}>Tamamlanmayanları Göster</button>
        <button onClick={showAllTodos}>Bütün Todoları Göster</button>
      </div>
      <input placeholder="Todolarda ara..." value={searchInput} onChange={searchHandler}></input>
      <hr />
      <ul>
        {showTodos.length === 0 && <p>Hiç todo yok.</p>}
        {showTodos.length !== 0 && showTodos.map(todo => <TodoItem todo={todo.text} key={todo.id} id={todo.id} isDone={todo.isDone} update={todo.update} />)}
        <hr />
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </ul>
    </>

  )
}