import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';

function Header() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="doomercore"/>
            </Link>
        </nav>
    );
}

export default Header;