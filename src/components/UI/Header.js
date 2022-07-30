import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

export default function Header() {
    return (
        <header className={classes.main_header}>
            <nav>
                <Link to='/' className={classes.nav_link} >Ana Sayfa</Link>
                <Link to='/login' className={classes.nav_link}>Giriş Yap</Link>
            </nav>
        </header>
    )
};