import React, { useEffect, useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function Todos() {
  const { todos, setTodos } = useTodoContext();

  const [showTodos, setShowTodos] = useState(todos);

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

  return (
    <>
      <div>
        <button onClick={showCompletedTodos}>Tamamlananları Göster</button>
        <button onClick={showNotCompletedTodos}>Tamamlanmayanları Göster</button>
        <button onClick={showAllTodos}>Bütün Todoları Göster</button>
      </div>
      <ul>
        {showTodos.length === 0 && <p>Hiç todo yok.</p>}
        {showTodos.length !== 0 && showTodos.map(todo => <TodoItem todo={todo.text} key={todo.id} id={todo.id} isDone={todo.isDone} update={todo.update} />)}
        <hr />
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </ul>
    </>

  )
}