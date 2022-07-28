import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Link to='/'>Ana Sayfa</Link>
            <Link to='/login'>Giriş Yap</Link>
        </>
    )
};