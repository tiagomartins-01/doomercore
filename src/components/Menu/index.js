import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Buttonmenu from '../ButtonMenu';
import NavBar from '../NavBar';

function Menu() {
    return (
        <nav className="Menu">
            <NavBar />
            <Link to="/">
                <img className="Logo" src={Logo} alt="doomercore"/>
            </Link>
        </nav>
    );
}

export default Menu;