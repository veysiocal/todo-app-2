import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/auth-reducer";

const Context = createContext();

export const useAuthContext = () => useContext(Context);

export default function Provider({ children }) {

    const [state, dispatch] = useReducer(reducer, {
        isLogin: false,
        username: null,
    });

    const data = {
        state,
        dispatch,
    };
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

}