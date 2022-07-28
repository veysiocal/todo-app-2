import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const data = {
        todos,
        setTodos,
    };

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
};

export const useTodoContext = () => useContext(Context);
export default TodoProvider;

