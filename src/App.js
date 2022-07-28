import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import TodoProvider, { Context } from "./context/TodoContext";

function App() {

  return (
    <TodoProvider>
      <AddTodo />
      <Todos />
    </TodoProvider>
  );
}

export default App;
