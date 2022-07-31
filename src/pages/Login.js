import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

import classes from './Login.module.css';

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
            <form onSubmit={loginSubmitHandler} className={classes.loginForm}>
                <input type='email' placeholder='Kullanıcı Adı' value={username} onChange={usernameHandler} className={classes.loginInput} />
                <br />
                <input type='password' placeholder='Parola' className={classes.loginInput}/>
                <br />
                <button type='submit' className={classes.loginButton} >Giriş Yap</button>
            </form>
    )
}