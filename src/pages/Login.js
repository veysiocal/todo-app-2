import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

export default function Login() {

    const { state, dispatch } = useAuthContext();
    const [username, setUsername] = useState();

    const usernameHandler = e => {
        setUsername(e.target.value);
    };

    const loginSubmitHandler = e => {
        e.preventDefault();
        dispatch({
            type: 'LOGIN',
            username: username
        })
        setUsername('');
    }
    return (
        <>
            <form onSubmit={loginSubmitHandler}>
                <input placeholder='Kullanıcı Adı' value={username} onChange={usernameHandler} />
                <br />
                {/* <input placeholder='Parola'/> */}
                {/* <br /> */}
                <button type='submit'>Giriş Yap</button>
            </form>
            <pre> {JSON.stringify(state, null, 2)} </pre>
        </>
    )
}