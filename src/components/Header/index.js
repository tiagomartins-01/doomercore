import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import NavBar from '../NavBar';
import './Header.css';

function Header() {
    return (
        <nav className="Header">
            <NavBar />
            <Link to="/">
                <img className="Logo" src={Logo} alt="doomercore"/>
            </Link>
        </nav>
    );
}

export default Header;