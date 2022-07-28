import { Route, Routes } from "react-router-dom";
import Header from "./components/UI/Header";
import Login from "./pages/Login";
import Todo from "./pages/Todo";

function App() {

  return (
    <>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
